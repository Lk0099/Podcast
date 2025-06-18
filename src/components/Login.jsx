import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialAuth from './SocialAuth';
import styles from './Login.module.css';

export default function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockUser = {
        id: 'user_123',
        name: formData.email.split('@')[0].charAt(0).toUpperCase() + formData.email.split('@')[0].slice(1),
        email: formData.email,
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      };
      
      onLogin?.(mockUser);
      console.log('Login successful:', formData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!resetEmail || !/\S+@\S+\.\S+/.test(resetEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate password reset
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResetSent(true);
      setTimeout(() => {
        setShowForgotPassword(false);
        setResetSent(false);
        setResetEmail('');
      }, 3000);
    } catch (error) {
      console.error('Password reset failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (user) => {
    onLogin?.(user);
    navigate('/dashboard');
  };

  if (showForgotPassword) {
    return (
      <div className={styles.loginPage}>
        <div className={styles.container}>
          <div className={styles.forgotPasswordSection}>
            <div className={styles.forgotPasswordCard}>
              <h2>Reset Your Password</h2>
              <p>Enter your email address and we'll send you a link to reset your password.</p>
              
              {resetSent ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✅</div>
                  <h3>Reset Link Sent!</h3>
                  <p>Check your email for password reset instructions.</p>
                </div>
              ) : (
                <form onSubmit={handleForgotPassword} className={styles.forgotForm}>
                  <div className="form-group">
                    <label htmlFor="resetEmail" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="resetEmail"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="form-input"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div className={styles.forgotActions}>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn btn-primary btn-lg"
                    >
                      {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(false)}
                      className="btn btn-outline"
                    >
                      Back to Login
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Welcome Back to <span className={styles.highlight}>RISE & Speak</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Continue your podcast journey where you left off. Discover, listen, and grow with every episode.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100K+</div>
                <div className={styles.statLabel}>Active Speakers</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>25K+</div>
                <div className={styles.statLabel}>Podcasts</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>5M+</div>
                <div className={styles.statLabel}>Episodes</div>
              </div>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🎯</span>
                <span>Personalized recommendations</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>📱</span>
                <span>Cross-device synchronization</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🔔</span>
                <span>Smart notifications</span>
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
              <h2>Sign In to Your Account</h2>
              <p>Don't have an account? <Link to="/register" className={styles.registerLink}>Create one now</Link></p>
            </div>

            {errors.general && (
              <div className={styles.errorAlert}>
                {errors.general}
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
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
                  placeholder="Enter your password"
                />
                {errors.password && <div className="form-error">{errors.password}</div>}
              </div>

              <div className={styles.formOptions}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <span>Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className={styles.forgotLink}
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`btn btn-primary btn-lg ${styles.submitButton} ${isLoading ? styles.loading : ''}`}
              >
                {isLoading ? (
                  <>
                    <div className={styles.spinner}></div>
                    Signing In...
                  </>
                ) : (
                  'Sign In & Rise'
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