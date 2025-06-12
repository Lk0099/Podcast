import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

export default function AudioVisualizer({ audioUrl, isPlaying }) {
  const waveformRef = useRef(null);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#6c5ce7',
      progressColor: '#a29bfe',
      cursorColor: 'transparent',
      barWidth: 2,
      height: 80,
      interact: false
    });

    wavesurfer.load(audioUrl);

    return () => wavesurfer.destroy();
  }, [audioUrl]);

  useEffect(() => {
    if (waveformRef.current?.wavesurfer) {
      isPlaying 
        ? waveformRef.current.wavesurfer.play()
        : waveformRef.current.wavesurfer.pause();
    }
  }, [isPlaying]);

  return <div ref={waveformRef} />;
}
