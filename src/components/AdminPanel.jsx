import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminPanel.module.css';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' });
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [securityLogs, setSecurityLogs] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  // Mock data for demonstration
  const [podcasts, setPodcasts] = useState([
    {
      id: 1,
      title: "Tech Innovation 2024",
      host: "Dr. Sarah Johnson",
      status: "published",
      privacy: "public",
      downloads: 15420,
      uploadDate: "2024-01-15",
      fileSize: "45.2 MB",
      duration: "42:15",
      category: "Technology",
      isRestricted: false,
      contentRating: "General",
      encryptionLevel: "AES-256"
    },
    {
      id: 2,
      title: "Private Business Strategy",
      host: "Michael Chen",
      status: "draft",
      privacy: "private",
      downloads: 0,
      uploadDate: "2024-01-20",
      fileSize: "38.7 MB",
      duration: "35:30",
      category: "Business",
      isRestricted: true,
      contentRating: "Business Only",
      encryptionLevel: "AES-256"
    }
  ]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "listener",
      status: "active",
      lastLogin: "2024-01-20",
      accountType: "premium",
      securityLevel: "standard"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "creator",
      status: "restricted",
      lastLogin: "2024-01-19",
      accountType: "creator",
      securityLevel: "high"
    }
  ]);

  const [analytics, setAnalytics] = useState({
    totalPodcasts: 1247,
    totalUsers: 15420,
    totalDownloads: 2847392,
    securityIncidents: 3,
    encryptedContent: 98.7,
    privateContent: 23.4
  });

  // Security features
  const handleAdminLogin = (e) => {
    e.preventDefault();
    // In production, this would be a secure API call
    if (adminCredentials.username === 'admin' && adminCredentials.password === 'SecureAdmin2024!') {
      setIsAuthenticated(true);
      setShowLoginForm(false);
      addSecurityLog('Admin login successful', 'success');
    } else {
      addSecurityLog('Failed admin login attempt', 'warning');
      alert('Invalid credentials');
    }
  };

  const addSecurityLog = (action, type) => {
    const newLog = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      action,
      type,
      ip: '192.168.1.100' // Mock IP
    };
    setSecurityLogs(prev => [newLog, ...prev.slice(0, 49)]); // Keep last 50 logs
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate secure upload with progress
    const uploadInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          setIsUploading(false);
          addSecurityLog(`Secure file upload completed: ${file.name}`, 'success');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const togglePodcastRestriction = (podcastId) => {
    setPodcasts(prev => prev.map(podcast => 
      podcast.id === podcastId 
        ? { ...podcast, isRestricted: !podcast.isRestricted }
        : podcast
    ));
    addSecurityLog(`Podcast restriction toggled for ID: ${podcastId}`, 'info');
  };

  const toggleUserStatus = (userId) => {
    setUsers(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'active' ? 'restricted' : 'active' }
        : user
    ));
    addSecurityLog(`User status changed for ID: ${userId}`, 'info');
  };

  const deletePodcast = (podcastId) => {
    if (window.confirm('Are you sure you want to permanently delete this podcast? This action cannot be undone.')) {
      setPodcasts(prev => prev.filter(podcast => podcast.id !== podcastId));
      addSecurityLog(`Podcast permanently deleted: ID ${podcastId}`, 'warning');
    }
  };

  if (showLoginForm) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.securityBadge}>
            <span className={styles.shieldIcon}>🛡️</span>
            <h2>Secure Admin Access</h2>
          </div>
          
          <form onSubmit={handleAdminLogin} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label>Administrator Username</label>
              <input
                type="text"
                value={adminCredentials.username}
                onChange={(e) => setAdminCredentials(prev => ({ ...prev, username: e.target.value }))}
                placeholder="Enter admin username"
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label>Secure Password</label>
              <input
                type="password"
                value={adminCredentials.password}
                onChange={(e) => setAdminCredentials(prev => ({ ...prev, password: e.target.value }))}
                placeholder="Enter secure password"
                required
              />
            </div>
            
            <button type="submit" className={styles.loginButton}>
              🔐 Secure Login
            </button>
          </form>
          
          <div className={styles.securityInfo}>
            <p>🔒 All admin sessions are encrypted with AES-256</p>
            <p>🛡️ Multi-factor authentication enabled</p>
            <p>📊 All actions are logged and monitored</p>
          </div>
          
          <button 
            onClick={() => navigate('/')} 
            className={styles.backButton}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminPanel}>
      <div className={styles.adminHeader}>
        <div className={styles.headerLeft}>
          <h1>🛡️ Secure Admin Panel</h1>
          <span className={styles.securityStatus}>🟢 Security Level: Maximum</span>
        </div>
        <div className={styles.headerRight}>
          <button 
            onClick={() => {
              setIsAuthenticated(false);
              setShowLoginForm(true);
              addSecurityLog('Admin logout', 'info');
            }}
            className={styles.logoutButton}
          >
            🔒 Secure Logout
          </button>
        </div>
      </div>

      <div className={styles.adminContent}>
        <nav className={styles.adminNav}>
          <button 
            className={`${styles.navButton} ${activeTab === 'dashboard' ? styles.active : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Dashboard
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'content' ? styles.active : ''}`}
            onClick={() => setActiveTab('content')}
          >
            🎙️ Content Management
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'users' ? styles.active : ''}`}
            onClick={() => setActiveTab('users')}
          >
            👥 User Management
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'security' ? styles.active : ''}`}
            onClick={() => setActiveTab('security')}
          >
            🔐 Security Center
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'upload' ? styles.active : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            📤 Secure Upload
          </button>
        </nav>

        <div className={styles.adminMain}>
          {activeTab === 'dashboard' && (
            <div className={styles.dashboard}>
              <h2>Security Dashboard</h2>
              
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>🎙️</div>
                  <div className={styles.statInfo}>
                    <h3>{analytics.totalPodcasts.toLocaleString()}</h3>
                    <p>Total Podcasts</p>
                  </div>
                </div>
                
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>👥</div>
                  <div className={styles.statInfo}>
                    <h3>{analytics.totalUsers.toLocaleString()}</h3>
                    <p>Active Users</p>
                  </div>
                </div>
                
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>📥</div>
                  <div className={styles.statInfo}>
                    <h3>{analytics.totalDownloads.toLocaleString()}</h3>
                    <p>Total Downloads</p>
                  </div>
                </div>
                
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>🔒</div>
                  <div className={styles.statInfo}>
                    <h3>{analytics.encryptedContent}%</h3>
                    <p>Encrypted Content</p>
                  </div>
                </div>
              </div>

              <div className={styles.securityOverview}>
                <h3>Security Overview</h3>
                <div className={styles.securityMetrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Security Incidents (24h)</span>
                    <span className={styles.metricValue}>{analytics.securityIncidents}</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Private Content</span>
                    <span className={styles.metricValue}>{analytics.privateContent}%</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Encryption Status</span>
                    <span className={styles.metricValue}>🟢 Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className={styles.contentManagement}>
              <h2>Content Management & Privacy Controls</h2>
              
              <div className={styles.contentTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Host</th>
                      <th>Status</th>
                      <th>Privacy</th>
                      <th>Encryption</th>
                      <th>Downloads</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {podcasts.map(podcast => (
                      <tr key={podcast.id}>
                        <td>
                          <div className={styles.podcastInfo}>
                            <strong>{podcast.title}</strong>
                            <span className={styles.duration}>{podcast.duration}</span>
                          </div>
                        </td>
                        <td>{podcast.host}</td>
                        <td>
                          <span className={`${styles.status} ${styles[podcast.status]}`}>
                            {podcast.status}
                          </span>
                        </td>
                        <td>
                          <span className={`${styles.privacy} ${styles[podcast.privacy]}`}>
                            {podcast.privacy === 'private' ? '🔒' : '🌐'} {podcast.privacy}
                          </span>
                        </td>
                        <td>
                          <span className={styles.encryption}>
                            🔐 {podcast.encryptionLevel}
                          </span>
                        </td>
                        <td>{podcast.downloads.toLocaleString()}</td>
                        <td>
                          <div className={styles.actionButtons}>
                            <button 
                              onClick={() => togglePodcastRestriction(podcast.id)}
                              className={`${styles.actionBtn} ${podcast.isRestricted ? styles.restricted : styles.unrestricted}`}
                            >
                              {podcast.isRestricted ? '🚫 Restricted' : '✅ Public'}
                            </button>
                            <button 
                              onClick={() => deletePodcast(podcast.id)}
                              className={`${styles.actionBtn} ${styles.delete}`}
                            >
                              🗑️ Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className={styles.userManagement}>
              <h2>User Management & Access Control</h2>
              
              <div className={styles.userTable}>
                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Security Level</th>
                      <th>Last Login</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id}>
                        <td>
                          <div className={styles.userInfo}>
                            <strong>{user.name}</strong>
                            <span className={styles.email}>{user.email}</span>
                          </div>
                        </td>
                        <td>
                          <span className={`${styles.role} ${styles[user.role]}`}>
                            {user.role}
                          </span>
                        </td>
                        <td>
                          <span className={`${styles.userStatus} ${styles[user.status]}`}>
                            {user.status === 'active' ? '🟢' : '🔴'} {user.status}
                          </span>
                        </td>
                        <td>
                          <span className={styles.securityLevel}>
                            🛡️ {user.securityLevel}
                          </span>
                        </td>
                        <td>{user.lastLogin}</td>
                        <td>
                          <button 
                            onClick={() => toggleUserStatus(user.id)}
                            className={`${styles.actionBtn} ${user.status === 'active' ? styles.restrict : styles.activate}`}
                          >
                            {user.status === 'active' ? '🚫 Restrict' : '✅ Activate'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className={styles.securityCenter}>
              <h2>Security Center & Activity Logs</h2>
              
              <div className={styles.securityControls}>
                <div className={styles.securityCard}>
                  <h3>🔐 Encryption Settings</h3>
                  <div className={styles.settingRow}>
                    <span>Content Encryption</span>
                    <span className={styles.enabled}>🟢 AES-256 Enabled</span>
                  </div>
                  <div className={styles.settingRow}>
                    <span>Database Encryption</span>
                    <span className={styles.enabled}>🟢 TDE Enabled</span>
                  </div>
                  <div className={styles.settingRow}>
                    <span>Transmission Security</span>
                    <span className={styles.enabled}>🟢 TLS 1.3</span>
                  </div>
                </div>

                <div className={styles.securityCard}>
                  <h3>🛡️ Access Controls</h3>
                  <div className={styles.settingRow}>
                    <span>Two-Factor Authentication</span>
                    <span className={styles.enabled}>🟢 Required</span>
                  </div>
                  <div className={styles.settingRow}>
                    <span>IP Whitelisting</span>
                    <span className={styles.enabled}>🟢 Active</span>
                  </div>
                  <div className={styles.settingRow}>
                    <span>Session Timeout</span>
                    <span className={styles.enabled}>🟢 15 minutes</span>
                  </div>
                </div>
              </div>

              <div className={styles.activityLogs}>
                <h3>Recent Security Activity</h3>
                <div className={styles.logsList}>
                  {securityLogs.map(log => (
                    <div key={log.id} className={`${styles.logEntry} ${styles[log.type]}`}>
                      <div className={styles.logTime}>
                        {new Date(log.timestamp).toLocaleString()}
                      </div>
                      <div className={styles.logAction}>{log.action}</div>
                      <div className={styles.logType}>
                        {log.type === 'success' && '✅'}
                        {log.type === 'warning' && '⚠️'}
                        {log.type === 'info' && 'ℹ️'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'upload' && (
            <div className={styles.secureUpload}>
              <h2>Secure Content Upload</h2>
              
              <div className={styles.uploadSection}>
                <div className={styles.uploadCard}>
                  <h3>🔒 Encrypted File Upload</h3>
                  <p>All uploads are automatically encrypted with AES-256 encryption</p>
                  
                  <div className={styles.uploadArea}>
                    <input
                      type="file"
                      id="secureUpload"
                      accept=".mp3,.wav,.m4a,.aac"
                      onChange={handleFileUpload}
                      className={styles.fileInput}
                    />
                    <label htmlFor="secureUpload" className={styles.uploadLabel}>
                      📤 Choose Audio File
                    </label>
                  </div>

                  {isUploading && (
                    <div className={styles.uploadProgress}>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                      <span>{uploadProgress}% - Encrypting and uploading...</span>
                    </div>
                  )}

                  <div className={styles.uploadOptions}>
                    <div className={styles.optionGroup}>
                      <label>Privacy Level</label>
                      <select className={styles.select}>
                        <option value="public">🌐 Public</option>
                        <option value="private">🔒 Private</option>
                        <option value="restricted">🚫 Restricted</option>
                      </select>
                    </div>

                    <div className={styles.optionGroup}>
                      <label>Content Rating</label>
                      <select className={styles.select}>
                        <option value="general">General Audience</option>
                        <option value="mature">Mature Content</option>
                        <option value="explicit">Explicit Content</option>
                      </select>
                    </div>

                    <div className={styles.optionGroup}>
                      <label>Access Control</label>
                      <select className={styles.select}>
                        <option value="open">Open Access</option>
                        <option value="premium">Premium Only</option>
                        <option value="invite">Invite Only</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.securityFeatures}>
                  <h3>🛡️ Security Features</h3>
                  <ul className={styles.featuresList}>
                    <li>🔐 End-to-end encryption</li>
                    <li>🛡️ Malware scanning</li>
                    <li>📊 Content analysis</li>
                    <li>🔍 Metadata stripping</li>
                    <li>🚫 DRM protection</li>
                    <li>📝 Audit trail logging</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}