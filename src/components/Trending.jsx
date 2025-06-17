import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Trending.module.css';

export default function Trending() {
  const [timeFilter, setTimeFilter] = useState('week');

  const trendingPodcasts = [
    {
      id: 1,
      title: "AI Revolution 2024",
      host: "Dr. Alex Thompson",
      category: "Technology",
      rank: 1,
      change: "+5",
      listens: "2.8M",
      growth: "+45%",
      coverImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Startup Stories",
      host: "Jennifer Kim",
      category: "Business",
      rank: 2,
      change: "+2",
      listens: "2.1M",
      growth: "+32%",
      coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Mystery Solved",
      host: "Detective Mike Ross",
      category: "True Crime",
      rank: 3,
      change: "new",
      listens: "1.9M",
      growth: "new",
      coverImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Comedy Gold",
      host: "Sarah Williams",
      category: "Comedy",
      rank: 4,
      change: "-1",
      listens: "1.7M",
      growth: "+18%",
      coverImage: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Health Matters",
      host: "Dr. Maria Garcia",
      category: "Health & Fitness",
      rank: 5,
      change: "+3",
      listens: "1.5M",
      growth: "+28%",
      coverImage: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const trendingEpisodes = [
    {
      id: 1,
      title: "The Future of Work: Remote vs Office",
      podcast: "Business Breakthrough",
      duration: "45 min",
      listens: "890K",
      publishedDate: "2 days ago",
      coverImage: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Breaking: New Climate Change Research",
      podcast: "Science Today",
      duration: "38 min",
      listens: "756K",
      publishedDate: "1 day ago",
      coverImage: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Celebrity Interview: Behind the Scenes",
      podcast: "Entertainment Weekly",
      duration: "52 min",
      listens: "623K",
      publishedDate: "3 days ago",
      coverImage: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    }
  ];

  const getChangeIcon = (change) => {
    if (change === 'new') return '🆕';
    if (change.startsWith('+')) return '📈';
    if (change.startsWith('-')) return '📉';
    return '➖';
  };

  const getChangeColor = (change) => {
    if (change === 'new') return styles.new;
    if (change.startsWith('+')) return styles.up;
    if (change.startsWith('-')) return styles.down;
    return styles.neutral;
  };

  return (
    <div className={styles.trending}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Trending Now</h1>
          <p>Discover what's hot in the podcast world</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.filterSection}>
          <h2>Top Podcasts</h2>
          <div className={styles.timeFilters}>
            <button 
              className={`${styles.filterBtn} ${timeFilter === 'day' ? styles.active : ''}`}
              onClick={() => setTimeFilter('day')}
            >
              Today
            </button>
            <button 
              className={`${styles.filterBtn} ${timeFilter === 'week' ? styles.active : ''}`}
              onClick={() => setTimeFilter('week')}
            >
              This Week
            </button>
            <button 
              className={`${styles.filterBtn} ${timeFilter === 'month' ? styles.active : ''}`}
              onClick={() => setTimeFilter('month')}
            >
              This Month
            </button>
          </div>
        </div>

        <div className={styles.trendingPodcasts}>
          {trendingPodcasts.map((podcast, index) => (
            <div key={podcast.id} className={styles.podcastRankCard}>
              <div className={styles.rankSection}>
                <span className={styles.rank}>#{podcast.rank}</span>
                <span className={`${styles.change} ${getChangeColor(podcast.change)}`}>
                  {getChangeIcon(podcast.change)} {podcast.change}
                </span>
              </div>
              
              <img src={podcast.coverImage} alt={podcast.title} className={styles.coverImage} />
              
              <div className={styles.podcastDetails}>
                <h3>{podcast.title}</h3>
                <p className={styles.host}>by {podcast.host}</p>
                <span className={styles.category}>{podcast.category}</span>
              </div>
              
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>{podcast.listens}</span>
                  <span className={styles.statLabel}>Listens</span>
                </div>
                <div className={styles.stat}>
                  <span className={`${styles.statValue} ${styles.growth}`}>{podcast.growth}</span>
                  <span className={styles.statLabel}>Growth</span>
                </div>
              </div>
              
              <div className={styles.actions}>
                <button className="btn btn-primary btn-sm">Listen Now</button>
                <button className="btn btn-outline btn-sm">Subscribe</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.trendingEpisodes}>
          <h2>Trending Episodes</h2>
          <div className={styles.episodesList}>
            {trendingEpisodes.map((episode, index) => (
              <div key={episode.id} className={styles.episodeCard}>
                <div className={styles.episodeRank}>
                  <span>#{index + 1}</span>
                </div>
                <img src={episode.coverImage} alt={episode.title} />
                <div className={styles.episodeInfo}>
                  <h4>{episode.title}</h4>
                  <p className={styles.podcastName}>{episode.podcast}</p>
                  <div className={styles.episodeMeta}>
                    <span>{episode.duration}</span>
                    <span>•</span>
                    <span>{episode.listens} listens</span>
                    <span>•</span>
                    <span>{episode.publishedDate}</span>
                  </div>
                </div>
                <div className={styles.episodeActions}>
                  <button className="btn btn-primary btn-sm">Play</button>
                  <button className={styles.saveBtn}>💾</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.trendingCategories}>
          <h2>Trending Categories</h2>
          <div className={styles.categoriesChart}>
            <div className={styles.categoryBar}>
              <span className={styles.categoryName}>Technology</span>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{ width: '85%' }}></div>
              </div>
              <span className={styles.percentage}>85%</span>
            </div>
            <div className={styles.categoryBar}>
              <span className={styles.categoryName}>True Crime</span>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{ width: '72%' }}></div>
              </div>
              <span className={styles.percentage}>72%</span>
            </div>
            <div className={styles.categoryBar}>
              <span className={styles.categoryName}>Business</span>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{ width: '68%' }}></div>
              </div>
              <span className={styles.percentage}>68%</span>
            </div>
            <div className={styles.categoryBar}>
              <span className={styles.categoryName}>Comedy</span>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{ width: '61%' }}></div>
              </div>
              <span className={styles.percentage}>61%</span>
            </div>
            <div className={styles.categoryBar}>
              <span className={styles.categoryName}>Health & Fitness</span>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{ width: '55%' }}></div>
              </div>
              <span className={styles.percentage}>55%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}