import React, { useState } from 'react';  // <-- Add this line
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

function App() {
  const [currentEpisode, setCurrentEpisode] = useState(null); // Now this will work

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar onSelectEpisode={setCurrentEpisode} />
        <Player episode={currentEpisode} />
      </div>
    </div>
  );
}

export default App;
