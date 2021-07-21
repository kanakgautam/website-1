import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js'
import Services from './components/pages/Services'
import Consulting from './components/pages/SmallCard'
import Contactus from './components/pages/CardArray3'
import Design from './components/pages/Design'
import Development from './components/pages/CardArray1'
import Home from './components/pages/Home'
import Marketing from './components/pages/Card'


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
