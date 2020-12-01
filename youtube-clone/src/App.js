import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Categories from './Categories';
import Videos from './Videos';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="app__page">
          <Categories />
          <Sidebar />
           <Videos />
        </div>
         
       
      </header>
    </div>
  );
}

export default App;
