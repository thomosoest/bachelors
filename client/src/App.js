import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import SearchCompany from './components/pages/SearchCompanies';
import CreateCompany from './components/pages/CreateCompany';

import PrivateRoute from './components/routing/PrivateRoute';
import CompanyState from './context/company/CompanyState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from "./utils/setAuthToken";


import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
    <CompanyState>
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Switch>
            <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute exact path="/companies" component={SearchCompany}/>
            <PrivateRoute exact path="/companies/make" component={CreateCompany}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/me" component={Profile}/>
          </Switch>
        </div>
      </div>
    </Router>
    </CompanyState>
    </AuthState>
  );
}

export default App;
