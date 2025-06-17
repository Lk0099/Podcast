import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialAuth from './SocialAuth';
import styles from './Register.module.css';

export default function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    interests: [],
    agreeToTerms: false,
    subscribeNewsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const podcastCategories = [
    'Technology', 'Business', 'Health & Fitness', 'Comedy', 'Education',
    'News & Politics', 'True Crime', 'Sports', 'Arts & Culture', 'Science'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newUser = {
        id: 'user_' + Date.now(),
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        interests: formData.interests
      };
      
      onRegister?.(newUser);
      console.log('Registration successful:', formData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (user) => {
    onRegister?.(user);
    navigate('/dashboard');
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Join the <span className={styles.highlight}>PodcastPro</span> Community
            </h1>
            <p className={styles.heroSubtitle}>
              Discover amazing podcasts, connect with creators, and never miss your favorite episodes.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎧</div>
                <div>
                  <h3>Unlimited Listening</h3>
                  <p>Access thousands of podcasts across all genres</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>📱</div>
                <div>
                  <h3>Sync Across Devices</h3>
                  <p>Start on your phone, continue on your computer</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🔔</div>
                <div>
                  <h3>Smart Notifications</h3>
                  <p>Get notified when new episodes are available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <Link to="/" className={styles.backLink}>
                ← Back to Home
              </Link>
              <h2>Create Your Account</h2>
              <p>Already have an account? <Link to="/login" className={styles.loginLink}>Sign in</Link></p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.nameFields}>
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.firstName ? styles.inputError : ''}`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <div className="form-error">{errors.firstName}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.lastName ? styles.inputError : ''}`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <div className="form-error">{errors.lastName}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? styles.inputError : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`form-input ${errors.password ? styles.inputError : ''}`}
                  placeholder="Create a strong password"
                />
                {errors.password && <div className="form-error">{errors.password}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`form-input ${errors.confirmPassword ? styles.inputError : ''}`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <div className="form-error">{errors.confirmPassword}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">What are you interested in?</label>
                <div className={styles.interestsGrid}>
                  {podcastCategories.map(category => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleInterestToggle(category)}
                      className={`${styles.interestTag} ${
                        formData.interests.includes(category) ? styles.interestTagActive : ''
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxText}>
                    I agree to the <Link to="/terms" className={styles.link}>Terms of Service</Link> and{' '}
                    <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
                  </span>
                </label>
                {errors.agreeToTerms && <div className="form-error">{errors.agreeToTerms}</div>}
              </div>

              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxText}>
                    Subscribe to our newsletter for podcast recommendations and updates
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`btn btn-primary btn-lg ${styles.submitButton} ${isLoading ? styles.loading : ''}`}
              >
                {isLoading ? (
                  <>
                    <div className={styles.spinner}></div>
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            <SocialAuth onSocialLogin={handleSocialLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}