import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <main>
      <img className="hero-image" src="/party.jpeg"></img>
      <h1>Dirty Thirties Birthday Party</h1>
      <h2>Description</h2>
      <h2>30!</h2>
      <p>
        And the time has come, even for me to admit "defeat" and enter the
        thirties! So I want to celebrate joining the Thirties club, and I wanna
        celebrate it hard and dirty. I am hoping that every one of you
        personally can join me and celebrate with me! Celebrate life with me,
        drink the night, dance out the music, talk out the meanings to this all,
        catch up, and some of you even meet! Just celebrate!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
        pretium aenean pharetra magna ac placerat.
      </p>
      <h3>Time and place:</h3>
      <p>December 15th 8pm at Marabu</p>
      <h3>Be there or be square</h3>

      <Form></Form>
    </main>
  );
}

export default App;
