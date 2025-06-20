import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className={styles.contactPage}>
        <div className={styles.successContainer}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>✅</div>
            <h2>Message Sent Successfully!</h2>
            <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.contactPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>📧</div>
                <div>
                  <h3>Email</h3>
                  <p>support@risespeak.com</p>
                </div>
              </div>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>📱</div>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>📍</div>
                <div>
                  <h3>Address</h3>
                  <p>123 Podcast Street<br />San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <h2>Send us a Message</h2>
            
            <div className={styles.formGroup}>
              <label>Inquiry Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="creator">Creator Support</option>
                <option value="business">Business Partnership</option>
                <option value="press">Press Inquiry</option>
              </select>
            </div>

            <div className={styles.formRow}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-input"
                rows="6"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary btn-lg ${isSubmitting ? styles.loading : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}