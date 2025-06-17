import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Discover.module.css';

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  const featuredPodcasts = [
    {
      id: 1,
      title: "The Daily Tech",
      host: "Sarah Johnson",
      category: "Technology",
      rating: 4.8,
      subscribers: "2.1M",
      description: "Your daily dose of tech news and insights",
      coverImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Business Breakthrough",
      host: "Michael Chen",
      category: "Business",
      rating: 4.9,
      subscribers: "1.8M",
      description: "Stories of entrepreneurial success and failure",
      coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Mindful Living",
      host: "Dr. Emma Wilson",
      category: "Health & Fitness",
      rating: 4.7,
      subscribers: "1.5M",
      description: "Mental health and wellness tips for modern life",
      coverImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Comedy Central Podcast",
      host: "Jake Martinez",
      category: "Comedy",
      rating: 4.6,
      subscribers: "2.3M",
      description: "Stand-up comedy and hilarious conversations",
      coverImage: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Learn Something New",
      host: "Prof. David Lee",
      category: "Education",
      rating: 4.8,
      subscribers: "1.2M",
      description: "Educational content that makes learning fun",
      coverImage: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Breaking News Today",
      host: "Lisa Rodriguez",
      category: "News & Politics",
      rating: 4.5,
      subscribers: "3.1M",
      description: "Unbiased news analysis and political commentary",
      coverImage: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const filteredPodcasts = featuredPodcasts.filter(podcast => {
    const matchesCategory = selectedCategory === 'all' || 
      podcast.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      podcast.host.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <h2>
            {selectedCategory === 'all' ? 'Featured Podcasts' : 
             `${categories.find(c => c.id === selectedCategory)?.name} Podcasts`}
          </h2>
          <div className={styles.podcastsGrid}>
            {filteredPodcasts.map(podcast => (
              <div key={podcast.id} className={styles.podcastCard}>
                <img src={podcast.coverImage} alt={podcast.title} />
                <div className={styles.podcastInfo}>
                  <h3>{podcast.title}</h3>
                  <p className={styles.host}>by {podcast.host}</p>
                  <p className={styles.description}>{podcast.description}</p>
                  <div className={styles.podcastStats}>
                    <span className={styles.rating}>⭐ {podcast.rating}</span>
                    <span className={styles.subscribers}>{podcast.subscribers} subscribers</span>
                  </div>
                  <div className={styles.podcastActions}>
                    <button className="btn btn-primary btn-sm">Subscribe</button>
                    <button className="btn btn-outline btn-sm">Preview</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}