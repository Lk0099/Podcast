import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

export default function Dashboard({ user }) {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalListened: 127,
    hoursListened: 45.2,
    favoriteShows: 12,
    completedEpisodes: 89
  };

  const recentEpisodes = [
    {
      id: 1,
      title: "The Future of Web Development",
      show: "Tech Talk Daily",
      progress: 75,
      duration: "45 min",
      coverImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Building Scalable Applications",
      show: "Developer Insights",
      progress: 30,
      duration: "52 min",
      coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 3,
      title: "AI and Machine Learning Trends",
      show: "Future Tech",
      progress: 100,
      duration: "38 min",
      coverImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const favoriteShows = [
    {
      id: 1,
      name: "Tech Talk Daily",
      episodes: 156,
      coverImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Developer Insights",
      episodes: 89,
      coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Future Tech",
      episodes: 124,
      coverImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    }
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <div className={styles.userInfo}>
            <img 
              src={user?.avatar || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"} 
              alt={user?.name || "User"}
              className={styles.avatar}
            />
            <div>
              <h1>Welcome back, {user?.name || "User"}!</h1>
              <p>Your podcast journey continues here</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <nav className={styles.tabNav}>
          <button 
            className={`${styles.tab} ${activeTab === 'overview' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'listening' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('listening')}
          >
            Listening History
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'favorites' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'settings' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </nav>

        <div className={styles.content}>
          {activeTab === 'overview' && (
            <div className={styles.overview}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>🎧</div>
                  <div className={styles.statInfo}>
                    <h3>{stats.totalListened}</h3>
                    <p>Episodes Listened</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>⏱️</div>
                  <div className={styles.statInfo}>
                    <h3>{stats.hoursListened}h</h3>
                    <p>Hours Listened</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>❤️</div>
                  <div className={styles.statInfo}>
                    <h3>{stats.favoriteShows}</h3>
                    <p>Favorite Shows</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>✅</div>
                  <div className={styles.statInfo}>
                    <h3>{stats.completedEpisodes}</h3>
                    <p>Completed</p>
                  </div>
                </div>
              </div>

              <div className={styles.section}>
                <h2>Continue Listening</h2>
                <div className={styles.episodeGrid}>
                  {recentEpisodes.map(episode => (
                    <div key={episode.id} className={styles.episodeCard}>
                      <img src={episode.coverImage} alt={episode.title} />
                      <div className={styles.episodeInfo}>
                        <h4>{episode.title}</h4>
                        <p>{episode.show} • {episode.duration}</p>
                        <div className={styles.progressBar}>
                          <div 
                            className={styles.progress} 
                            style={{ width: `${episode.progress}%` }}
                          ></div>
                        </div>
                        <span className={styles.progressText}>{episode.progress}% complete</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className={styles.favorites}>
              <h2>Your Favorite Shows</h2>
              <div className={styles.showGrid}>
                {favoriteShows.map(show => (
                  <div key={show.id} className={styles.showCard}>
                    <img src={show.coverImage} alt={show.name} />
                    <div className={styles.showInfo}>
                      <h3>{show.name}</h3>
                      <p>{show.episodes} episodes</p>
                      <button className="btn btn-primary btn-sm">Listen Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'listening' && (
            <div className={styles.history}>
              <h2>Listening History</h2>
              <div className={styles.historyList}>
                {recentEpisodes.map(episode => (
                  <div key={episode.id} className={styles.historyItem}>
                    <img src={episode.coverImage} alt={episode.title} />
                    <div className={styles.historyInfo}>
                      <h4>{episode.title}</h4>
                      <p>{episode.show}</p>
                      <span className={styles.historyDate}>Listened 2 days ago</span>
                    </div>
                    <div className={styles.historyActions}>
                      <button className="btn btn-outline btn-sm">Play Again</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className={styles.settings}>
              <h2>Account Settings</h2>
              <div className={styles.settingsGrid}>
                <div className={styles.settingCard}>
                  <h3>Profile Information</h3>
                  <div className="form-group">
                    <label className="form-label">Display Name</label>
                    <input type="text" className="form-input" defaultValue={user?.name || "User"} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" defaultValue={user?.email || "user@example.com"} />
                  </div>
                  <button className="btn btn-primary">Save Changes</button>
                </div>
                
                <div className={styles.settingCard}>
                  <h3>Preferences</h3>
                  <div className={styles.settingOption}>
                    <label>
                      <input type="checkbox" defaultChecked />
                      Auto-play next episode
                    </label>
                  </div>
                  <div className={styles.settingOption}>
                    <label>
                      <input type="checkbox" defaultChecked />
                      Download episodes on WiFi
                    </label>
                  </div>
                  <div className={styles.settingOption}>
                    <label>
                      <input type="checkbox" />
                      Email notifications
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}