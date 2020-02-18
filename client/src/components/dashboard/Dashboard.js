import React, { Fragment, useContext, useEffect } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import AuthContext from '../../context/auth/authContext';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import About from '../../components/pages/About';
import DashNavbar from './DashNavbar';

const Dashboard = () => {

    const {getCurrentProfile, loading, profile} = useContext(ProfileContext);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        getCurrentProfile();
        // eslint-disable-next-line
    }, []);
    
    return loading? <p>Loading...</p> :
        <Router>
        <Fragment>
            <h1>Dashboard</h1>
            <p>Velkommen {user && user.name}</p>
            {profile !== null?
                <Fragment> 
                    <p>You have a profile</p>
                    <DashNavbar/>
                    <div className="container">
                    <Switch>
                        <Route exact path="/test" component={About}/>
                    </Switch>
                    </div>
                </Fragment>:
                <Fragment>
                    <p>Opprett profil først</p>
                    <Link to="create-profile" className="btn btn-primary">Opprett</Link>
                </Fragment>}

        </Fragment>
        </Router>

}



export default Dashboard