import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './Privacy.module.css';

export default function Privacy() {
  return (
    <div className={styles.privacyPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2025</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our service, or contact us for support. This may include your name, email 
              address, and listening preferences.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              including personalizing your podcast recommendations and ensuring platform security.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You may also 
              opt out of certain communications from us.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@risespeak.com or through our <Link to="/contact">contact page</Link>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}