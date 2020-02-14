import React, { Fragment, useContext, useEffect } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AuthContext from '../../context/auth/authContext'

const Dashboard = () => {

    const {getCurrentProfile, loading} = useContext(ProfileContext);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        getCurrentProfile();
    }, []);
    
    return loading? <p>Loading...</p> :
        <Fragment>
            <h1>Dashboard</h1>
            <p>Velkommen {user && user.name}</p>
        </Fragment>

}



export default Dashboard