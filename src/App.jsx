import React from 'react';
import Card from './components/Card/Card.jsx';

import './App.css';
import logo from './assets/imgs/pokemon.svg';

function App() {

  return (
    <div className='app'>
      <img src={logo} className='logo' alt="Logo marca principal do Pokémon" />
      <Card />
    </div>
  )
}

export default App
