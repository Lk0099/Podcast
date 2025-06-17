import React from 'react';
import styles from './SocialAuth.module.css';

export default function SocialAuth({ onSocialLogin }) {
  const handleGoogleLogin = async () => {
    try {
      // In a real app, you would integrate with Google OAuth
      // For demo purposes, we'll simulate the login
      const mockUser = {
        id: 'google_123',
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        provider: 'google'
      };
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSocialLogin(mockUser);
      console.log('Google login successful:', mockUser);
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      // In a real app, you would integrate with Facebook SDK
      const mockUser = {
        id: 'facebook_456',
        name: 'Jane Smith',
        email: 'jane.smith@facebook.com',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        provider: 'facebook'
      };
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSocialLogin(mockUser);
      console.log('Facebook login successful:', mockUser);
    } catch (error) {
      console.error('Facebook login failed:', error);
    }
  };

  const handleGmailLogin = async () => {
    try {
      // Gmail login is essentially Google login with Gmail-specific scope
      const mockUser = {
        id: 'gmail_789',
        name: 'Mike Johnson',
        email: 'mike.johnson@gmail.com',
        avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        provider: 'gmail'
      };
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSocialLogin(mockUser);
      console.log('Gmail login successful:', mockUser);
    } catch (error) {
      console.error('Gmail login failed:', error);
    }
  };

  return (
    <div className={styles.socialAuth}>
      <div className={styles.divider}>
        <span>Or continue with</span>
      </div>
      
      <div className={styles.socialButtons}>
        <button 
          onClick={handleGoogleLogin}
          className={`${styles.socialButton} ${styles.google}`}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <button 
          onClick={handleFacebookLogin}
          className={`${styles.socialButton} ${styles.facebook}`}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Continue with Facebook
        </button>

        <button 
          onClick={handleGmailLogin}
          className={`${styles.socialButton} ${styles.gmail}`}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z"/>
            <path fill="#FBBC05" d="M0 5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09 21.455 3.82h.909c.904 0 1.636.732 1.636 1.636v.91L12 12.73 0 6.366v-.91z"/>
            <path fill="#34A853" d="M0 6.366v13c0 .904.732 1.636 1.636 1.636h3.819V11.73L0 6.366z"/>
            <path fill="#4285F4" d="M24 6.366v13c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L24 6.366z"/>
          </svg>
          Continue with Gmail
        </button>
      </div>
    </div>
  );
}