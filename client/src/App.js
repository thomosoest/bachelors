import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import CreateCompany from './components/pages/CreateCompany';
import Dashboard from './components/dashboard/Dashboard';
import ProfileCreate from './components/pages/ProfileCreate';
import CompanyLists from './components/companies/CompanyLists';
import CompanyDashboard from './components/dashboard/CompanyDashboard';

import PrivateRoute from './components/routing/PrivateRoute';
import CompanyState from './context/company/CompanyState';
import AuthState from './context/auth/AuthState';
import ProfileState from './context/profile/profileState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from "./utils/setAuthToken";


import './App.css';
import ShowProfile from './components/profile/ShowProfile';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
    <ProfileState>
    <CompanyState>
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Switch>
            <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute exact path="/companies" component={CompanyLists}/>
            <PrivateRoute exact path="/companies/make" component={CreateCompany}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <PrivateRoute exact path="/create-profile" component={ProfileCreate}/>
            <PrivateRoute exact path="/company-dashboard" component={CompanyDashboard}/>
            <Route exact path="/profile/:user" component={ShowProfile}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/me" component={Profile}/>
          </Switch>
        </div>
      </div>
    </Router>
    </CompanyState>
    </ProfileState>
    </AuthState>
  );
}

export default App;
