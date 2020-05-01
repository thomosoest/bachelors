import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <h1>Opprette bedrift</h1>
            <p>Hvis du er bedrift eier kan du opprette en bedrift med denne linken.</p>
            <Link to="/companies/make">Opprett bedrift</Link>
        </div>
    )
}

export default Home;