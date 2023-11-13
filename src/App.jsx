import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <main>
      <img className="hero-image" src="/party.jpeg"></img>
      <h1>Birthday</h1>
      <h2>Description</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
        pretium aenean pharetra magna ac placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
        pretium aenean pharetra magna ac placerat.
      </p>
      <h3>Time and place:</h3>
      <p>December 15th 8pm at Filmkunstbar</p>
      <h3>Be there or be square</h3>
    </main>
  );
}

export default App;
