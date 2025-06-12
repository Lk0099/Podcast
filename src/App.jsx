import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/" element={
          <>
            <Header user={user} />
            <div className="main-content">
              <Sidebar onSelectEpisode={setCurrentEpisode} />
              <Player episode={currentEpisode} />
            </div>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;