import React, { useState, useRef, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import styles from "./Player.module.css";
import AudioVisualizer from './AudioVisualizer';

export default function Player({ episode }) {  // <-- 1. Add episode prop here
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);

  // 2. Remove the mock audio URL since we'll use episode?.audioUrl

  useEffect(() => {
    if (episode) {
      setIsLoading(true);
      setIsPlaying(false);
      setCurrentTime(0);  // Reset progress when episode changes
    }
  }, [episode]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.audioEl.current.pause();
    } else {
      audioRef.current.audioEl.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const handleLoadedMetadata = (e) => {
    setDuration(e.target.duration);
    setIsLoading(false);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.player}>
      {/* 3. Replace the existing episodeInfo div with this new version */}
      <div className={`${styles.episodeInfo} ${isLoading ? styles.loading : ""}`}>
        {episode ? (
          isLoading ? (
            <>
              <div className={styles.loadingPlaceholder} style={{ width: '150px', height: '150px' }}></div>
              <div className={styles.loadingPlaceholder}></div>
              <div className={styles.loadingPlaceholder} style={{ width: '60%' }}></div>
            </>
          ) : (
            <>
              <img src={episode.coverImage} alt={episode.title} />
              <h2>{episode.title}</h2>
              <p>{episode.host} • {formatTime(episode.duration)}</p>
            </>
          )
        ) : (
          <div className={styles.emptyState}>Select an episode to play</div>
        )}
      </div>

      {/* 4. Update the audio player source */}
      {episode && (
        <ReactAudioPlayer
          src={episode.audioUrl}
          ref={audioRef}
          listenInterval={100}
          onListen={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          controls={false}
        />
      )}
      <div className={styles.visualizer}>
  	<AudioVisualizer
 	    audioUrl={episode?.audioUrl}
    	    isPlaying={isPlaying}
        />
      </div>
      <div className={styles.controls}>
  <button 
    onClick={() => {
      if (audioRef.current?.audioEl?.current) {
        audioRef.current.audioEl.current.currentTime -= 15;
      }
    }}
    disabled={!episode || isLoading}
  >
    ⏮ 15s
  </button>
  
  <button 
    onClick={togglePlayPause}
    disabled={!episode || isLoading}
    className={isPlaying ? styles.playing : ''}
  >
    {isPlaying ? "⏸" : "⏵"}
  </button>
  
  <button 
    onClick={() => {
      if (audioRef.current?.audioEl?.current) {
        audioRef.current.audioEl.current.currentTime += 15;
      }
    }}
    disabled={!episode || isLoading}
  >
    ⏭ 15s
  </button>
  
  <div className={styles.progressBar}>
    <div 
      className={styles.progress} 
      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
    ></div>
  </div>
  <span>
    {formatTime(currentTime)} / {episode ? formatTime(episode.duration) : '0:00'}
  </span>
</div>
    </div>
  );
}
