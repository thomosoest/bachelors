import React, {Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CompanyState from './context/company/CompanyState';


import './App.css';

const App = () => {
  return (
    <CompanyState>
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </Switch>
        </div>
      </div>
    </Router>
    </CompanyState>
  );
}

export default App;
