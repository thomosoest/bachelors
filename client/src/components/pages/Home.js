import React from 'react';
import Companies from '../../components/companies/Companies';
import Search from '../companies/Search';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Search/>
            <Companies/>
        </div>
    )
}

export default Home;