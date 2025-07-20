import { useState } from 'react'
// CHANGE THIS LINE: Import BrowserRouter and alias it as Router
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import MainMenuComponent from './Pages/MainPage'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/guess-the-flag">Guess the Flag</Link>
          <Link to="/guess-the-capital">Guess the Capital</Link>
        </nav>

        <Routes>
          <Route path="/" element={<MainMenuComponent />} />
          <Route
            path="/guess-the-flag"
            element={
              <div>
                <h2>Guess the Flag Game 🚩</h2>
                <p>This is where your flag guessing game will be!</p>
              </div>
            }
          />
          <Route
            path="/guess-the-capital"
            element={
              <div>
                <h2>Guess the Capital Game 🏙️</h2>
                <p>This is where your capital guessing game will be!</p>
              </div>
            }
          />
          <Route path="*" element={<div><h1>404 - Page Not Found</h1><p>Oops! The page you're looking for doesn't exist.</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;