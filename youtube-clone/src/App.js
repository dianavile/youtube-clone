import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import Videos from './Videos';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/search/:searchTerm">
             <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
          </Route>
          <Route path="/">
              <header className="App-header">
              <div className="app__page">
                <Sidebar />
                <Videos />
              </div>
              </header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
