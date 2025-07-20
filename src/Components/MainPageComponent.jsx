import React from 'react';
import '../Styles/MainMenu.css';
import { Link } from 'react-router-dom';
const MainMenuComponent = () => { // Renamed component here
  return (
    <div className="main-menu">
      <h1>Welcome to GuessTheFlag!</h1>
      <p>Choose a game mode to start:</p>
      <div className="mode-options">
        <Link to="/guess-the-flag" className="mode-button">
          📍 Guess the Flag
        </Link>
        <Link to="/guess-the-capital" className="mode-button">
          🏙️ Guess the Capital
        </Link>
      </div>
    </div>
  );
};

export default MainMenuComponent; 