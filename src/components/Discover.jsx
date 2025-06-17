import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Discover.module.css';

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🎧' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'health', name: 'Health & Fitness', icon: '🏃‍♂️' },
    { id: 'comedy', name: 'Comedy', icon: '😂' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'news', name: 'News & Politics', icon: '📰' },
    { id: 'crime', name: 'True Crime', icon: '🔍' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'culture', name: 'Arts & Culture', icon: '🎨' },
    { id: 'science', name: 'Science', icon: '🔬' }
  ];

  const allPodcasts = [
    {
      id: 1,
      title: "The Daily Tech",
      host: "Sarah Johnson",
      category: "technology",
      rating: 4.8,
      subscribers: "2.1M",
      description: "Your daily dose of tech news and insights",
      coverImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      isSubscribed: false,
      episodeCount: 245,
      lastUpdated: "2 days ago"
    },
    {
      id: 2,
      title: "Business Breakthrough",
      host: "Michael Chen",
      category: "business",
      rating: 4.9,
      subscribers: "1.8M",
      description: "Stories of entrepreneurial success and failure",
      coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      isSubscribed: true,
      episodeCount: 189,
      lastUpdated: "1 day ago"
    },
    {
      id: 3,
      title: "Mindful Living",
      host: "Dr. Emma Wilson",
      category: "health",
      rating: 4.7,
      subscribers: "1.5M",
      description: "Mental health and wellness tips for modern life",
      coverImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      isSubscribed: false,
      episodeCount: 156,
      lastUpdated: "3 days ago"
    },
    {
      id: 4,
      title: "Comedy Central Podcast",
      host: "Jake Martinez",
      category: "comedy",
      rating: 4.6,
      subscribers: "2.3M",
      description: "Stand-up comedy and hilarious conversations",
      coverImage: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      isSubscribed: false,
      episodeCount: 312,
      lastUpdated: "1 day ago"
    },
    {
      id: 5,
      title: "Learn Something New",
      host: "Prof. David Lee",
      category: "education",
      rating: 4.8,
      subscribers: "1.2M",
      description: "Educational content that makes learning fun",
      coverImage: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      isSubscribed: true,
      episodeCount: 98,
      lastUpdated: "5 days ago"
    },
    {
      id: 6,
      title: "Breaking News Today",
      host: "Lisa Rodriguez",
      category: "news",
      rating: 4.5,
      subscribers: "3.1M",
      description: "Unbiased news analysis and political commentary",
      coverImage: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      isSubscribed: false,
      episodeCount: 567,
      lastUpdated: "Today"
    },
    {
      id: 7,
      title: "Crime Chronicles",
      host: "Detective Mark Thompson",
      category: "crime",
      rating: 4.9,
      subscribers: "2.8M",
      description: "Deep dives into fascinating criminal cases",
      coverImage: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      isSubscribed: false,
      episodeCount: 134,
      lastUpdated: "2 days ago"
    },
    {
      id: 8,
      title: "Sports Talk Live",
      host: "Alex Rivera",
      category: "sports",
      rating: 4.4,
      subscribers: "1.9M",
      description: "Latest sports news and expert analysis",
      coverImage: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      isSubscribed: false,
      episodeCount: 289,
      lastUpdated: "Today"
    },
    {
      id: 9,
      title: "Art & Soul",
      host: "Isabella Martinez",
      category: "culture",
      rating: 4.6,
      subscribers: "890K",
      description: "Exploring creativity and artistic expression",
      coverImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      isSubscribed: true,
      episodeCount: 76,
      lastUpdated: "4 days ago"
    },
    {
      id: 10,
      title: "Science Simplified",
      host: "Dr. Robert Kim",
      category: "science",
      rating: 4.7,
      subscribers: "1.4M",
      description: "Making complex science accessible to everyone",
      coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      isSubscribed: false,
      episodeCount: 112,
      lastUpdated: "1 day ago"
    }
  ];

  const [subscriptions, setSubscriptions] = useState(
    allPodcasts.filter(p => p.isSubscribed).map(p => p.id)
  );

  const filteredPodcasts = useMemo(() => {
    let filtered = allPodcasts.filter(podcast => {
      const matchesCategory = selectedCategory === 'all' || podcast.category === selectedCategory;
      const matchesSearch = 
        podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        podcast.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
        podcast.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sort podcasts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'subscribers':
          return parseFloat(b.subscribers) - parseFloat(a.subscribers);
        case 'recent':
          const dateOrder = { 'Today': 0, '1 day ago': 1, '2 days ago': 2, '3 days ago': 3, '4 days ago': 4, '5 days ago': 5 };
          return (dateOrder[a.lastUpdated] || 999) - (dateOrder[b.lastUpdated] || 999);
        default: // popularity
          return parseFloat(b.subscribers) - parseFloat(a.subscribers);
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const handleSubscribe = (podcastId) => {
    setSubscriptions(prev => 
      prev.includes(podcastId) 
        ? prev.filter(id => id !== podcastId)
        : [...prev, podcastId]
    );
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  return (
    <div className={styles.discover}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Discover Podcasts</h1>
          <p>Find your next favorite podcast from thousands of shows</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search podcasts, hosts, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>🔍</button>
            {(searchTerm || selectedCategory !== 'all') && (
              <button onClick={clearSearch} className={styles.clearButton}>
                Clear
              </button>
            )}
          </div>
          
          <div className={styles.filterControls}>
            <div className={styles.sortControl}>
              <label>Sort by:</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.sortSelect}
              >
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="recent">Recently Updated</option>
                <option value="subscribers">Subscribers</option>
              </select>
            </div>
            
            <div className={styles.resultsCount}>
              {filteredPodcasts.length} podcast{filteredPodcasts.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        <div className={styles.categoriesSection}>
          <h2>Browse by Category</h2>
          <div className={styles.categoriesGrid}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`${styles.categoryCard} ${
                  selectedCategory === category.id ? styles.categoryActive : ''
                }`}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryName}>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.podcastsSection}>
          <div className={styles.sectionHeader}>
            <h2>
              {selectedCategory === 'all' ? 'All Podcasts' : 
               `${categories.find(c => c.id === selectedCategory)?.name} Podcasts`}
            </h2>
            {searchTerm && (
              <p className={styles.searchResults}>
                Results for "{searchTerm}"
              </p>
            )}
          </div>
          
          {filteredPodcasts.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3>No podcasts found</h3>
              <p>Try adjusting your search terms or browse different categories</p>
              <button onClick={clearSearch} className="btn btn-primary">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={styles.podcastsGrid}>
              {filteredPodcasts.map(podcast => (
                <div key={podcast.id} className={styles.podcastCard}>
                  <div className={styles.podcastImageContainer}>
                    <img src={podcast.coverImage} alt={podcast.title} />
                    <div className={styles.podcastOverlay}>
                      <button className={styles.playButton}>▶</button>
                    </div>
                  </div>
                  
                  <div className={styles.podcastInfo}>
                    <h3>{podcast.title}</h3>
                    <p className={styles.host}>by {podcast.host}</p>
                    <p className={styles.description}>{podcast.description}</p>
                    
                    <div className={styles.podcastMeta}>
                      <span className={styles.episodes}>{podcast.episodeCount} episodes</span>
                      <span className={styles.lastUpdated}>Updated {podcast.lastUpdated}</span>
                    </div>
                    
                    <div className={styles.podcastStats}>
                      <span className={styles.rating}>⭐ {podcast.rating}</span>
                      <span className={styles.subscribers}>{podcast.subscribers} subscribers</span>
                    </div>
                    
                    <div className={styles.podcastActions}>
                      <button 
                        onClick={() => handleSubscribe(podcast.id)}
                        className={`btn ${subscriptions.includes(podcast.id) ? 'btn-secondary' : 'btn-primary'} btn-sm`}
                      >
                        {subscriptions.includes(podcast.id) ? 'Subscribed ✓' : 'Subscribe'}
                      </button>
                      <button className="btn btn-outline btn-sm">Preview</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}