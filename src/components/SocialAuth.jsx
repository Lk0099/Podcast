import React, { useState } from 'react';
import styles from './SocialAuth.module.css';

export default function SocialAuth({ onSocialLogin }) {
  const [loadingProvider, setLoadingProvider] = useState(null);

  const handleGoogleLogin = async () => {
    setLoadingProvider('google');
    try {
      // Simulate Google OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockUser = {
        id: 'google_' + Date.now(),
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        provider: 'google'
      };
      
      onSocialLogin(mockUser);
      console.log('Google login successful:', mockUser);
    } catch (error) {
      console.error('Google login failed:', error);
    } finally {
      setLoadingProvider(null);
    }
  };

  const handleFacebookLogin = async () => {
    setLoadingProvider('facebook');
    try {
      // Simulate Facebook SDK integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockUser = {
        id: 'facebook_' + Date.now(),
        name: 'Jane Smith',
        email: 'jane.smith@facebook.com',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        provider: 'facebook'
      };
      
      onSocialLogin(mockUser);
      console.log('Facebook login successful:', mockUser);
    } catch (error) {
      console.error('Facebook login failed:', error);
    } finally {
      setLoadingProvider(null);
    }
  };

  const handleTwitterLogin = async () => {
    setLoadingProvider('twitter');
    try {
      // Simulate Twitter OAuth
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockUser = {
        id: 'twitter_' + Date.now(),
        name: 'Mike Johnson',
        email: 'mike.johnson@twitter.com',
        avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        provider: 'twitter'
      };
      
      onSocialLogin(mockUser);
      console.log('Twitter login successful:', mockUser);
    } catch (error) {
      console.error('Twitter login failed:', error);
    } finally {
      setLoadingProvider(null);
    }
  };

  const handleAppleLogin = async () => {
    setLoadingProvider('apple');
    try {
      // Simulate Apple Sign In
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockUser = {
        id: 'apple_' + Date.now(),
        name: 'Sarah Wilson',
        email: 'sarah.wilson@icloud.com',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        provider: 'apple'
      };
      
      onSocialLogin(mockUser);
      console.log('Apple login successful:', mockUser);
    } catch (error) {
      console.error('Apple login failed:', error);
    } finally {
      setLoadingProvider(null);
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
          disabled={loadingProvider !== null}
          className={`${styles.socialButton} ${styles.google} ${loadingProvider === 'google' ? styles.loading : ''}`}
        >
          {loadingProvider === 'google' ? (
            <div className={styles.spinner}></div>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          )}
          Continue with Google
        </button>

        <button 
          onClick={handleFacebookLogin}
          disabled={loadingProvider !== null}
          className={`${styles.socialButton} ${styles.facebook} ${loadingProvider === 'facebook' ? styles.loading : ''}`}
        >
          {loadingProvider === 'facebook' ? (
            <div className={styles.spinner}></div>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          )}
          Continue with Facebook
        </button>

        <button 
          onClick={handleTwitterLogin}
          disabled={loadingProvider !== null}
          className={`${styles.socialButton} ${styles.twitter} ${loadingProvider === 'twitter' ? styles.loading : ''}`}
        >
          {loadingProvider === 'twitter' ? (
            <div className={styles.spinner}></div>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#1DA1F2" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          )}
          Continue with Twitter
        </button>

        <button 
          onClick={handleAppleLogin}
          disabled={loadingProvider !== null}
          className={`${styles.socialButton} ${styles.apple} ${loadingProvider === 'apple' ? styles.loading : ''}`}
        >
          {loadingProvider === 'apple' ? (
            <div className={styles.spinner}></div>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#000000" d="M12.017 0C8.396 0 8.025.044 8.025.044v11.15c0 3.852 3.13 6.982 6.982 6.982 3.852 0 6.982-3.13 6.982-6.982V.044S16.638 0 12.017 0zm2.982 16.982c-2.206 0-3.982-1.776-3.982-3.982V3h3.982c2.206 0 3.982 1.776 3.982 3.982s-1.776 3.982-3.982 3.982z"/>
            </svg>
          )}
          Continue with Apple
        </button>
      </div>
    </div>
  );
}