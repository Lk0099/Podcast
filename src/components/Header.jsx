import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="header">
      <h1>🎙️ My Podcast App</h1>
      <nav>
        <button>Home</button>
        <button>Discover</button>
      </nav>
    </header>
  );
}
