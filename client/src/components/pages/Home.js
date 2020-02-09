import React, {useContext, useEffect} from 'react';
import Companies from '../../components/companies/Companies';
import Search from '../companies/Search';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <Search/>
            <Companies/>
        </div>
    )
}

export default Home;