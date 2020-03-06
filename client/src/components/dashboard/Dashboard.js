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
          
        <Fragment>
            <h1>Dashbord</h1>
            
            {profile !== null?
                <Fragment> 
                    <p>Du har opprettet en profil.</p>
                    <p>Velkommen til Kompi,     {user && user.name}!</p>
                    <p>Ditt brukernavn:         {user && user.email} </p>
                    <p>Kontoen din ble laget:   {user && user.date} </p>
                    <p>Bio:                     {profile && profile.bio}</p>
                    <p>Firma:                   </p>
                    <p>Tittel:                  {profile && profile.title}</p>
                    <p>Kompetanse:             {profile && profile.skills}</p>
                    <p>Erfaringer:              {profile && profile.experiences}</p>  
                </Fragment>:
                
                <Fragment>
                    <p>Opprett profil først</p>
                    <Link to="create-profile" className="btn btn-primary">Opprett</Link>
                </Fragment>}

        </Fragment>
}



export default Dashboard