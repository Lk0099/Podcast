import { podcasts } from "../data/podcasts";
import styles from "./Sidebar.module.css";

export default function Sidebar({ onSelectEpisode }) {
  return (
    <aside className={styles.sidebar}>
      <h3>Latest Episodes</h3>
      <div className={styles.podcastList}>
        {podcasts.map(podcast => (
          <div 
            key={podcast.id}
            className={styles.podcastCard}
            onClick={() => onSelectEpisode(podcast)}
          >
            <img 
              src={podcast.coverImage} 
              alt={podcast.title} 
              className={styles.coverArt}
            />
            <div className={styles.podcastInfo}>
              <h4>{podcast.title}</h4>
              <p>{podcast.host} • {Math.floor(podcast.duration/60)} min</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}