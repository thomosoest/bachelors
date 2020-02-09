import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import {Link} from 'react-router-dom';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <Link to="/companies/make">Opprett bedrift</Link>
        </div>
    )
}

export default Home;