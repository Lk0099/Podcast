import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Discover from "./components/Discover";
import Trending from "./components/Trending";
import HomePage from "./components/HomePage";
import AdminPanel from "./components/AdminPanel";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";

function App() {
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleRegister = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<Contact />} />
        <Route path="/careers" element={<About />} />
        <Route path="/press" element={<About />} />
        <Route path="/blog" element={<About />} />
        <Route path="/community" element={<Contact />} />
        <Route path="/feedback" element={<Contact />} />
        <Route path="/cookies" element={<Privacy />} />
        <Route path="/dmca" element={<Terms />} />
        <Route path="/categories" element={<Discover />} />
        <Route path="/creators" element={<About />} />
        <Route path="/player" element={
          <>
            <Header user={user} onLogout={handleLogout} />
            <div className="main-content">
              <Sidebar onSelectEpisode={setCurrentEpisode} />
              <Player episode={currentEpisode} />
            </div>
          </>
        } />
        <Route path="/" element={
          <>
            <Header user={user} onLogout={handleLogout} />
            <HomePage />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;