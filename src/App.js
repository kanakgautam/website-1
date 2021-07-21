import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/pages/Home'


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
