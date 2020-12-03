import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="app__page">
          <Sidebar />
          <Videos />
        </div>
      </header>
    </div>
  );
}

export default App;
