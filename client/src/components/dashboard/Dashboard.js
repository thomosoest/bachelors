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
    
// <img src="https://image.shutterstock.com/image-vector/example-stamp-600w-426673501.jpg" class="w3-round" alt="Norway"></img>
                    

    return loading? <p>Loading...</p> :
          
        <Fragment>
            
            <h1>Dashbord</h1>
            
            {profile !== null?
                <Fragment> 
                    <div class="card Half">
                    <p style={{color: "red"}}>Du har opprettet en profil.</p>
                    <p>Velkommen til Kompi,     {user && user.name}!</p>
                    <h4>Ditt brukernavn:         {user && user.email} </h4>
                    <p>Kontoen din ble laget:   {user && user.date} </p>
                    <p>Bio:                     {profile && profile.bio}</p>
                    <p>Firma:                   </p>
                    <p>Tittel:                  {profile && profile.title}</p>
                    <p>Kompetanse:             {profile && profile.skills}</p>
                    <p>Erfaringer:              {profile && profile.experiences}</p>  
                    </div>
                </Fragment>:
      
                <Fragment>
                    <p style={{color: "red"}}>Opprett profil først</p>
                    <Link to="create-profile" className="btn btn-primary">Opprett</Link>
                </Fragment>}

        </Fragment>
}



export default Dashboard