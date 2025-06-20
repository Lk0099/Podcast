import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>About RISE & Speak</h1>
          <p>Empowering voices, connecting communities, transforming stories</p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            At RISE & Speak, we believe every voice deserves to be heard. Our mission is to democratize 
            podcasting by providing creators with powerful tools and listeners with personalized experiences 
            that connect them to the stories that matter most.
          </p>
        </section>

        <section className={styles.story}>
          <h2>Our Story</h2>
          <p>
            Founded in 2024, RISE & Speak emerged from a simple observation: the podcast industry needed 
            a platform that truly understood both creators and listeners. We set out to build more than 
            just another streaming service – we created a community where stories flourish and voices rise.
          </p>
        </section>

        <section className={styles.values}>
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3>Authenticity</h3>
              <p>We champion genuine voices and authentic storytelling</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌍</div>
              <h3>Inclusivity</h3>
              <p>Our platform welcomes creators and listeners from all backgrounds</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🚀</div>
              <h3>Innovation</h3>
              <p>We continuously evolve to serve our community better</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Community</h3>
              <p>We foster connections that transcend geographical boundaries</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}