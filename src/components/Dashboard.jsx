import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

export default function Dashboard({ user }) {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalListened: 127,
    hoursListened: 45.2,
    favoriteShows: 12,
    completedEpisodes: 89,
    weeklyGoal: 5,
    weeklyProgress: 3
  };

  const recentEpisodes = [
    {
      id: 1,
      title: "The Future of Web Development",
      show: "Tech Talk Daily",
      progress: 75,
      duration: "45 min",
      timeLeft: "11 min left",
      coverImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      lastPlayed: "2 hours ago"
    },
    {
      id: 2,
      title: "Building Scalable Applications",
      show: "Developer Insights",
      progress: 30,
      duration: "52 min",
      timeLeft: "36 min left",
      coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      lastPlayed: "Yesterday"
    },
    {
      id: 3,
      title: "AI and Machine Learning Trends",
      show: "Future Tech",
      progress: 100,
      duration: "38 min",
      timeLeft: "Completed",
      coverImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      lastPlayed: "2 days ago"
    }
  ];

  const favoriteShows = [
    {
      id: 1,
      name: "Tech Talk Daily",
      episodes: 156,
      newEpisodes: 3,
      coverImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      category: "Technology",
      rating: 4.8
    },
    {
      id: 2,
      name: "Developer Insights",
      episodes: 89,
      newEpisodes: 1,
      coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      category: "Technology",
      rating: 4.9
    },
    {
      id: 3,
      name: "Future Tech",
      episodes: 124,
      newEpisodes: 2,
      coverImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      category: "Technology",
      rating: 4.7
    },
    {
      id: 4,
      name: "Business Breakthrough",
      episodes: 78,
      newEpisodes: 0,
      coverImage: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      category: "Business",
      rating: 4.6
    }
  ];

  const recommendations = [
    {
      id: 1,
      title: "Startup Stories",
      host: "Jennifer Kim",
      reason: "Based on your interest in Business",
      coverImage: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.8
    },
    {
      id: 2,
      title: "Code & Coffee",
      host: "Alex Thompson",
      reason: "Similar to Tech Talk Daily",
      coverImage: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.7
    }
  ];

  const listeningHistory = [
    {
      id: 1,
      title: "The Future of Web Development",
      show: "Tech Talk Daily",
      duration: "45 min",
      completedAt: "2 hours ago",
      coverImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Building Scalable Applications",
      show: "Developer Insights",
      duration: "52 min",
      completedAt: "Yesterday",
      coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 3,
      title: "AI and Machine Learning Trends",
      show: "Future Tech",
      duration: "38 min",
      completedAt: "2 days ago",
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
          <div className={styles.userSection}>
            <img 
              src={user?.avatar || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"} 
              alt={user?.name || "User"}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <h1>Welcome back, {user?.name || "User"}!</h1>
              <p>Ready to continue your podcast journey?</p>
            </div>
          </div>
          <div className={styles.quickActions}>
            <Link to="/discover" className="btn btn-outline btn-sm">Discover</Link>
            <Link to="/trending" className="btn btn-primary btn-sm">Trending</Link>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <nav className={styles.tabNav}>
          <button 
            className={`${styles.tab} ${activeTab === 'overview' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className={styles.tabIcon}>📊</span>
            Overview
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'listening' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('listening')}
          >
            <span className={styles.tabIcon}>🎧</span>
            Continue Listening
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'favorites' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            <span className={styles.tabIcon}>❤️</span>
            My Shows
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'history' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('history')}
          >
            <span className={styles.tabIcon}>📚</span>
            History
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'settings' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <span className={styles.tabIcon}>⚙️</span>
            Settings
          </button>
        </nav>

        <div className={styles.content}>
          {activeTab === 'overview' && (
            <div className={styles.overview}>
              <div className={styles.statsSection}>
                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statIcon}>🎧</div>
                    <div className={styles.statInfo}>
                      <h3>{stats.totalListened}</h3>
                      <p>Episodes Listened</p>
                    </div>
                    <div className={styles.statTrend}>+12 this week</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statIcon}>⏱️</div>
                    <div className={styles.statInfo}>
                      <h3>{stats.hoursListened}h</h3>
                      <p>Hours Listened</p>
                    </div>
                    <div className={styles.statTrend}>+8.5h this week</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statIcon}>❤️</div>
                    <div className={styles.statInfo}>
                      <h3>{stats.favoriteShows}</h3>
                      <p>Subscribed Shows</p>
                    </div>
                    <div className={styles.statTrend}>+2 this month</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statIcon}>🎯</div>
                    <div className={styles.statInfo}>
                      <h3>{stats.weeklyProgress}/{stats.weeklyGoal}</h3>
                      <p>Weekly Goal</p>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progress} 
                        style={{ width: `${(stats.weeklyProgress / stats.weeklyGoal) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.mainContent}>
                <div className={styles.leftColumn}>
                  <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                      <h2>Continue Listening</h2>
                      <button className={styles.seeAllBtn}>See All</button>
                    </div>
                    <div className={styles.episodeList}>
                      {recentEpisodes.slice(0, 3).map(episode => (
                        <div key={episode.id} className={styles.episodeCard}>
                          <img src={episode.coverImage} alt={episode.title} />
                          <div className={styles.episodeInfo}>
                            <h4>{episode.title}</h4>
                            <p>{episode.show} • {episode.duration}</p>
                            <div className={styles.episodeProgress}>
                              <div className={styles.progressBar}>
                                <div 
                                  className={styles.progress} 
                                  style={{ width: `${episode.progress}%` }}
                                ></div>
                              </div>
                              <span className={styles.progressText}>{episode.timeLeft}</span>
                            </div>
                          </div>
                          <button className={styles.playBtn}>▶</button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                      <h2>Recommended for You</h2>
                    </div>
                    <div className={styles.recommendationList}>
                      {recommendations.map(rec => (
                        <div key={rec.id} className={styles.recommendationCard}>
                          <img src={rec.coverImage} alt={rec.title} />
                          <div className={styles.recInfo}>
                            <h4>{rec.title}</h4>
                            <p>by {rec.host}</p>
                            <span className={styles.recReason}>{rec.reason}</span>
                            <div className={styles.recRating}>⭐ {rec.rating}</div>
                          </div>
                          <button className="btn btn-outline btn-sm">Subscribe</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.rightColumn}>
                  <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                      <h2>My Shows</h2>
                      <button className={styles.seeAllBtn}>Manage</button>
                    </div>
                    <div className={styles.showsList}>
                      {favoriteShows.slice(0, 4).map(show => (
                        <div key={show.id} className={styles.showCard}>
                          <img src={show.coverImage} alt={show.name} />
                          <div className={styles.showInfo}>
                            <h4>{show.name}</h4>
                            <p>{show.episodes} episodes</p>
                            {show.newEpisodes > 0 && (
                              <span className={styles.newBadge}>
                                {show.newEpisodes} new
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h2>Listening Activity</h2>
                    <div className={styles.activityChart}>
                      <div className={styles.chartHeader}>
                        <span>This Week</span>
                        <span className={styles.chartValue}>12.5 hours</span>
                      </div>
                      <div className={styles.chartBars}>
                        {[3, 2, 4, 1, 3, 2, 1].map((hours, index) => (
                          <div key={index} className={styles.chartBar}>
                            <div 
                              className={styles.bar} 
                              style={{ height: `${hours * 20}px` }}
                            ></div>
                            <span className={styles.barLabel}>
                              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'listening' && (
            <div className={styles.listening}>
              <div className={styles.sectionHeader}>
                <h2>Continue Listening</h2>
                <p>Pick up where you left off</p>
              </div>
              <div className={styles.episodeGrid}>
                {recentEpisodes.map(episode => (
                  <div key={episode.id} className={styles.episodeCardLarge}>
                    <img src={episode.coverImage} alt={episode.title} />
                    <div className={styles.episodeInfo}>
                      <h3>{episode.title}</h3>
                      <p>{episode.show} • {episode.duration}</p>
                      <span className={styles.lastPlayed}>Last played {episode.lastPlayed}</span>
                      <div className={styles.episodeProgress}>
                        <div className={styles.progressBar}>
                          <div 
                            className={styles.progress} 
                            style={{ width: `${episode.progress}%` }}
                          ></div>
                        </div>
                        <span className={styles.progressText}>{episode.timeLeft}</span>
                      </div>
                      <button className="btn btn-primary">Continue Playing</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className={styles.favorites}>
              <div className={styles.sectionHeader}>
                <h2>My Subscribed Shows</h2>
                <p>Manage your podcast subscriptions</p>
              </div>
              <div className={styles.showGrid}>
                {favoriteShows.map(show => (
                  <div key={show.id} className={styles.showCardLarge}>
                    <img src={show.coverImage} alt={show.name} />
                    <div className={styles.showInfo}>
                      <h3>{show.name}</h3>
                      <p>{show.category}</p>
                      <div className={styles.showMeta}>
                        <span>{show.episodes} episodes</span>
                        <span>⭐ {show.rating}</span>
                      </div>
                      {show.newEpisodes > 0 && (
                        <div className={styles.newEpisodes}>
                          {show.newEpisodes} new episode{show.newEpisodes > 1 ? 's' : ''}
                        </div>
                      )}
                      <div className={styles.showActions}>
                        <button className="btn btn-primary btn-sm">Listen Now</button>
                        <button className="btn btn-outline btn-sm">Unsubscribe</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className={styles.history}>
              <div className={styles.sectionHeader}>
                <h2>Listening History</h2>
                <p>Your recently played episodes</p>
              </div>
              <div className={styles.historyList}>
                {listeningHistory.map(item => (
                  <div key={item.id} className={styles.historyItem}>
                    <img src={item.coverImage} alt={item.title} />
                    <div className={styles.historyInfo}>
                      <h4>{item.title}</h4>
                      <p>{item.show} • {item.duration}</p>
                      <span className={styles.historyDate}>Completed {item.completedAt}</span>
                    </div>
                    <div className={styles.historyActions}>
                      <button className="btn btn-outline btn-sm">Play Again</button>
                      <button className={styles.moreBtn}>⋯</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className={styles.settings}>
              <div className={styles.sectionHeader}>
                <h2>Account Settings</h2>
                <p>Manage your account and preferences</p>
              </div>
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
                  <h3>Listening Preferences</h3>
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
                      Skip intro/outro automatically
                    </label>
                  </div>
                </div>

                <div className={styles.settingCard}>
                  <h3>Notifications</h3>
                  <div className={styles.settingOption}>
                    <label>
                      <input type="checkbox" defaultChecked />
                      New episode notifications
                    </label>
                  </div>
                  <div className={styles.settingOption}>
                    <label>
                      <input type="checkbox" />
                      Weekly listening summary
                    </label>
                  </div>
                  <div className={styles.settingOption}>
                    <label>
                      <input type="checkbox" />
                      Podcast recommendations
                    </label>
                  </div>
                </div>

                <div className={styles.settingCard}>
                  <h3>Privacy & Data</h3>
                  <div className={styles.settingOption}>
                    <label>
                      <input type="checkbox" defaultChecked />
                      Share listening data for recommendations
                    </label>
                  </div>
                  <div className={styles.settingOption}>
                    <label>
                      <input type="checkbox" />
                      Allow analytics tracking
                    </label>
                  </div>
                  <div className={styles.dangerZone}>
                    <h4>Danger Zone</h4>
                    <button className="btn btn-outline" style={{ color: 'var(--error)', borderColor: 'var(--error)' }}>
                      Delete Account
                    </button>
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