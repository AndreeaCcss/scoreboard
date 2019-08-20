import React from 'react';
import './App.css';
import Title from './components/Title';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div className="App">
      <Title content="SCOREBOARD"/>
      <Scoreboard />
    </div>
  );
}

export default App;
