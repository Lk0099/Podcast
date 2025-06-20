import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './Terms.module.css';

export default function Terms() {
  return (
    <div className={styles.termsPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Terms of Service</h1>
          <p>Last updated: January 2025</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using RISE & Speak, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of RISE & Speak materials 
              for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. User Accounts</h2>
            <p>
              You are responsible for safeguarding the password and for maintaining the confidentiality 
              of your account information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Content Guidelines</h2>
            <p>
              Users must not upload content that is illegal, harmful, threatening, abusive, harassing, 
              defamatory, vulgar, obscene, or otherwise objectionable.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by RISE & Speak 
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the service immediately, 
              without prior notice, for any reason whatsoever.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at legal@risespeak.com 
              or through our <Link to="/contact">contact page</Link>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}