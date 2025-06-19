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