import React, { useContext, useEffect } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AuthContext from '../../context/auth/authContext'

const Dashboard = props => {
    const profileContext = useContext(ProfileContext);
    useEffect(() => {
        profileContext.getCurrentProfile();
    }, []);
    
    return(
        <div>
            Dashboard
        </div>
    )
}



export default Dashboard