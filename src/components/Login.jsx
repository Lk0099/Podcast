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
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockUser = {
        id: 'user_123',
        name: 'John Doe',
        email: formData.email,
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      };
      
      onLogin?.(mockUser);
      console.log('Login successful:', formData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (user) => {
    onLogin?.(user);
    navigate('/dashboard');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Welcome Back to <span className={styles.highlight}>PodcastPro</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Continue your podcast journey where you left off.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50K+</div>
                <div className={styles.statLabel}>Active Listeners</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10K+</div>
                <div className={styles.statLabel}>Podcasts</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>1M+</div>
                <div className={styles.statLabel}>Episodes</div>
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
              <h2>Sign In</h2>
              <p>Don't have an account? <Link to="/register" className={styles.registerLink}>Create one</Link></p>
            </div>

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
                <Link to="/forgot-password" className={styles.forgotLink}>
                  Forgot password?
                </Link>
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
                  'Sign In'
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