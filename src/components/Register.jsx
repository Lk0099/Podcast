import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialAuth from './SocialAuth';
import styles from './Register.module.css';

export default function Register({ onRegister }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    interests: [],
    agreeToTerms: false,
    subscribeNewsletter: false,
    profileType: 'listener' // listener, creator, both
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const podcastCategories = [
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'health', name: 'Health & Fitness', icon: '🏃‍♂️' },
    { id: 'comedy', name: 'Comedy', icon: '😂' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'news', name: 'News & Politics', icon: '📰' },
    { id: 'crime', name: 'True Crime', icon: '🔍' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'culture', name: 'Arts & Culture', icon: '🎨' },
    { id: 'science', name: 'Science', icon: '🔬' },
    { id: 'history', name: 'History', icon: '📜' },
    { id: 'music', name: 'Music', icon: '🎵' }
  ];

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

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
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
    }

    if (step === 2) {
      if (formData.interests.length === 0) {
        newErrors.interests = 'Please select at least one interest';
      }
    }

    if (step === 3) {
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'You must agree to the terms and conditions';
      }
    }

    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validateStep(currentStep);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateStep(3);

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
        interests: formData.interests,
        profileType: formData.profileType
      };
      
      onRegister?.(newUser);
      console.log('Registration successful:', formData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
      setErrors({ general: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (user) => {
    onRegister?.(user);
    navigate('/dashboard');
  };

  const renderStep1 = () => (
    <div className={styles.step}>
      <h3>Let's Get Started</h3>
      <p>Create your RISE & Speak account</p>

      <div className={styles.profileTypeSelection}>
        <label className="form-label">I want to:</label>
        <div className={styles.profileTypes}>
          <label className={`${styles.profileType} ${formData.profileType === 'listener' ? styles.active : ''}`}>
            <input
              type="radio"
              name="profileType"
              value="listener"
              checked={formData.profileType === 'listener'}
              onChange={handleInputChange}
            />
            <div className={styles.profileTypeContent}>
              <span className={styles.profileTypeIcon}>🎧</span>
              <span>Listen to Podcasts</span>
            </div>
          </label>
          <label className={`${styles.profileType} ${formData.profileType === 'creator' ? styles.active : ''}`}>
            <input
              type="radio"
              name="profileType"
              value="creator"
              checked={formData.profileType === 'creator'}
              onChange={handleInputChange}
            />
            <div className={styles.profileTypeContent}>
              <span className={styles.profileTypeIcon}>🎙️</span>
              <span>Create Podcasts</span>
            </div>
          </label>
          <label className={`${styles.profileType} ${formData.profileType === 'both' ? styles.active : ''}`}>
            <input
              type="radio"
              name="profileType"
              value="both"
              checked={formData.profileType === 'both'}
              onChange={handleInputChange}
            />
            <div className={styles.profileTypeContent}>
              <span className={styles.profileTypeIcon}>🚀</span>
              <span>Both</span>
            </div>
          </label>
        </div>
      </div>

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
    </div>
  );

  const renderStep2 = () => (
    <div className={styles.step}>
      <h3>What Interests You?</h3>
      <p>Select topics you'd like to explore</p>

      <div className={styles.interestsGrid}>
        {podcastCategories.map(category => (
          <button
            key={category.id}
            type="button"
            onClick={() => handleInterestToggle(category.id)}
            className={`${styles.interestTag} ${
              formData.interests.includes(category.id) ? styles.interestTagActive : ''
            }`}
          >
            <span className={styles.interestIcon}>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
      {errors.interests && <div className="form-error">{errors.interests}</div>}

      <div className={styles.selectedCount}>
        {formData.interests.length} interest{formData.interests.length !== 1 ? 's' : ''} selected
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className={styles.step}>
      <h3>Almost Done!</h3>
      <p>Review and confirm your details</p>

      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <strong>Name:</strong> {formData.firstName} {formData.lastName}
        </div>
        <div className={styles.summaryItem}>
          <strong>Email:</strong> {formData.email}
        </div>
        <div className={styles.summaryItem}>
          <strong>Profile Type:</strong> {formData.profileType.charAt(0).toUpperCase() + formData.profileType.slice(1)}
        </div>
        <div className={styles.summaryItem}>
          <strong>Interests:</strong> {formData.interests.length} selected
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
    </div>
  );

  return (
    <div className={styles.registerPage}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Join the <span className={styles.highlight}>RISE & Speak</span> Revolution
            </h1>
            <p className={styles.heroSubtitle}>
              Discover amazing podcasts, connect with creators, and amplify your voice in the world of audio storytelling.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎧</div>
                <div>
                  <h3>Unlimited Access</h3>
                  <p>Stream thousands of podcasts across all genres</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>📱</div>
                <div>
                  <h3>Cross-Platform Sync</h3>
                  <p>Seamlessly switch between all your devices</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎙️</div>
                <div>
                  <h3>Creator Tools</h3>
                  <p>Publish and monetize your own podcasts</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🔔</div>
                <div>
                  <h3>Smart Notifications</h3>
                  <p>Never miss new episodes from your favorites</p>
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

            <div className={styles.progressBar}>
              <div className={styles.progressStep}>
                <div className={`${styles.stepCircle} ${currentStep >= 1 ? styles.active : ''}`}>1</div>
                <span>Details</span>
              </div>
              <div className={styles.progressLine}></div>
              <div className={styles.progressStep}>
                <div className={`${styles.stepCircle} ${currentStep >= 2 ? styles.active : ''}`}>2</div>
                <span>Interests</span>
              </div>
              <div className={styles.progressLine}></div>
              <div className={styles.progressStep}>
                <div className={`${styles.stepCircle} ${currentStep >= 3 ? styles.active : ''}`}>3</div>
                <span>Confirm</span>
              </div>
            </div>

            {errors.general && (
              <div className={styles.errorAlert}>
                {errors.general}
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}

              <div className={styles.formActions}>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="btn btn-outline"
                  >
                    Previous
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn btn-primary btn-lg"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn btn-primary btn-lg ${isLoading ? styles.loading : ''}`}
                  >
                    {isLoading ? (
                      <>
                        <div className={styles.spinner}></div>
                        Creating Account...
                      </>
                    ) : (
                      'Rise & Speak!'
                    )}
                  </button>
                )}
              </div>
            </form>

            {currentStep === 1 && <SocialAuth onSocialLogin={handleSocialLogin} />}
          </div>
        </div>
      </div>
    </div>
  );
}