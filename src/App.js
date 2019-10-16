import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './stars.css';
import './rainbow.js';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Racing+Sans+One&display=swap" rel="stylesheet"></link>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        <header className="App-header">
          <div className="rectangle">
            <h3 id="name">
              Revz
            </h3>
            <p>
              - <a href="http://steamcommunity.com/id/smrevz/" target="_blank" rel="noopener noreferrer">Steam</a>
            </p>
            <p>
              - <a href="https://discord.gg/SZk6qjp" target="_blank" rel="noopener noreferrer">Discord</a>
            </p>
            <div className="bg-animation overlay">
          <div id="stars3"></div>
            <div id="stars4"></div>
            <div id="stars2"></div>
            </div>
          </div>
        </header>
    </div>
  );
}

export default App;