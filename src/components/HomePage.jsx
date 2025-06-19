import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Tech Entrepreneur",
      content: "RISE & Speak has revolutionized how I consume and create content. The platform is intuitive and the community is amazing!",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Podcast Creator",
      content: "The creator tools are fantastic! I've grown my audience by 300% since joining RISE & Speak. Highly recommended!",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Content Listener",
      content: "I love the personalized recommendations. I've discovered so many amazing podcasts I never would have found otherwise!",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const features = [
    {
      icon: "🎧",
      title: "Unlimited Streaming",
      description: "Access thousands of podcasts across all genres with crystal-clear audio quality"
    },
    {
      icon: "🎙️",
      title: "Creator Studio",
      description: "Professional tools to record, edit, and publish your podcasts with ease"
    },
    {
      icon: "📱",
      title: "Cross-Platform Sync",
      description: "Seamlessly switch between devices and never lose your place"
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description: "Get notified when your favorite creators release new episodes"
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Track your listening habits and discover new interests"
    },
    {
      icon: "🌟",
      title: "AI Recommendations",
      description: "Discover content tailored to your unique preferences"
    }
  ];

  const stats = [
    { number: "100K+", label: "Active Users" },
    { number: "25K+", label: "Podcasts" },
    { number: "5M+", label: "Episodes" },
    { number: "150+", label: "Countries" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.heroBackground}>
          <div className={styles.floatingElements}>
            <div className={styles.floatingElement}>🎵</div>
            <div className={styles.floatingElement}>🎧</div>
            <div className={styles.floatingElement}>🎙️</div>
            <div className={styles.floatingElement}>📻</div>
            <div className={styles.floatingElement}>🔊</div>
          </div>
        </div>
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine1}>RISE</span>
            <span className={styles.titleAmpersand}>&</span>
            <span className={styles.titleLine2}>Speak</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Amplify Your Voice, Discover Amazing Stories
          </p>
          <p className={styles.heroDescription}>
            Join the ultimate podcast platform where creators and listeners unite. 
            Stream, create, and connect with millions of voices from around the world.
          </p>
          
          <div className={styles.heroActions}>
            <Link to="/register" className="btn btn-primary btn-lg">
              Start Your Journey
            </Link>
            <Link to="/discover" className="btn btn-outline btn-lg">
              Explore Podcasts
            </Link>
          </div>

          <div className={styles.heroStats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.heroStat}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose RISE & Speak?</h2>
            <p>Experience the future of podcast streaming and creation</p>
          </div>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>What Our Community Says</h2>
            <p>Real stories from real users</p>
          </div>
          
          <div className={styles.testimonialSlider}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p>"{testimonials[currentTestimonial].content}"</p>
              </div>
              <div className={styles.testimonialAuthor}>
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                />
                <div>
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <span>{testimonials[currentTestimonial].role}</span>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialDots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentTestimonial ? styles.active : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Rise & Speak?</h2>
            <p>Join thousands of creators and listeners in the ultimate podcast experience</p>
            <div className={styles.ctaActions}>
              <Link to="/register" className="btn btn-primary btn-lg">
                Get Started Free
              </Link>
              <Link to="/trending" className="btn btn-secondary btn-lg">
                Explore Trending
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <span className={styles.logoIcon}>🎙️</span>
                <span className={styles.logoText}>RISE & Speak</span>
              </div>
              <p>Amplifying voices, connecting stories, building communities.</p>
              
              <div className={styles.socialLinks}>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className={styles.footerLinks}>
              <div className={styles.footerColumn}>
                <h4>Platform</h4>
                <ul>
                  <li><Link to="/discover">Discover</Link></li>
                  <li><Link to="/trending">Trending</Link></li>
                  <li><a href="#categories">Categories</a></li>
                  <li><a href="#creators">For Creators</a></li>
                </ul>
              </div>
              
              <div className={styles.footerColumn}>
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#press">Press</a></li>
                  <li><a href="#blog">Blog</a></li>
                </ul>
              </div>
              
              <div className={styles.footerColumn}>
                <h4>Support</h4>
                <ul>
                  <li><a href="#help">Help Center</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#community">Community</a></li>
                  <li><a href="#feedback">Feedback</a></li>
                </ul>
              </div>
              
              <div className={styles.footerColumn}>
                <h4>Legal</h4>
                <ul>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms of Service</a></li>
                  <li><a href="#cookies">Cookie Policy</a></li>
                  <li><a href="#dmca">DMCA</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              <p>&copy; 2025 RISE & Speak™. All rights reserved.</p>
              <p>RISE & Speak® is a registered trademark of RISE & Speak Inc.</p>
            </div>
            <div className={styles.footerMeta}>
              <span>Made with ❤️ for podcast lovers worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}