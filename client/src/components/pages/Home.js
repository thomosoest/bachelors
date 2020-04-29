import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <h1>Home</h1>
            <h4>Her kan du opprette en bedrift</h4>
            <Link to="/companies/make">Opprett bedrift</Link>
        </div>
    )
}

export default Home;