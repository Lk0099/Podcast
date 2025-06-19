import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ user, onLogout }) {
  const handleLogout = () => {
    onLogout?.();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>🎙️</span>
          <span className={styles.logoText}>RISE & Speak</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/discover" className={styles.navLink}>Discover</Link>
          <Link to="/trending" className={styles.navLink}>Trending</Link>
          <Link to="/player" className={styles.navLink}>Player</Link>
          <Link to="/admin" className={styles.navLink}>🛡️ Admin</Link>
        </nav>

        <div className={styles.authSection}>
          {user ? (
            <div className={styles.userMenu}>
              <img 
                src={user.avatar || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"} 
                alt={user.name}
                className={styles.avatar}
              />
              <span className={styles.userName}>{user.name}</span>
              <Link to="/dashboard" className="btn btn-primary btn-sm">Dashboard</Link>
              <button onClick={handleLogout} className="btn btn-outline btn-sm">Logout</button>
            </div>
          ) : (
            <div className={styles.authButtons}>
              <Link to="/login" className="btn btn-outline btn-sm">Sign In</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}