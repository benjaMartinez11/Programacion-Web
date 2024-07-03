// src/App.js

import React from 'react';
import './App.css';
import CurrencyList from './components/CurrencyList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conversor de Monedas</h1>
      </header>
      <main>
        <CurrencyList />
      </main>
    </div>
  );
}

export default App;