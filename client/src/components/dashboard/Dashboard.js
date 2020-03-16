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
            {profile !== null?
                <Fragment> 
                    <div className="card Half">
                    <p style={{color: "red"}}>Du har opprettet en profil.</p>
                    <img src="https://image.shutterstock.com/image-vector/example-stamp-600w-426673501.jpg" class="w3-round" alt="Norway"></img>
                    <h2>{profile && profile.title}{user && user.name}</h2>
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i> Programmerer  {profile && profile.title} </p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i> Oslo, NO</p>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i> {user && user.email} </p>
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i> 1224435534  </p>

                    </div>
                
                    <div className="card Half">
                    <h4>Bio</h4>
                    <p>Lorem ipsum                     {profile && profile.bio}</p>
                    </div>

                               
                    <div className="card Half bio">
                    <p>Kompetanse:             {profile && profile.skills}</p>
                    <p>Erfaringer:              {profile && profile.experiences}</p>  
                    </div>

                    <div className="date">
                    <p>Kontoen din ble laget:   {user && user.date} </p>
                    </div>
                
                </Fragment>:
                <Fragment>
                    <p style={{color: "red"}}>Opprett profil først</p>
                    <Link to="create-profile" className="btn btn-primary">Opprett</Link>
                </Fragment>}
        </Fragment>
}

export default Dashboard