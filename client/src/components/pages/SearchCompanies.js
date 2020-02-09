import React, {useContext, useEffect} from 'react';
import Companies from '../../components/companies/Companies';
import Search from '../companies/Search';
import AuthContext from '../../context/auth/authContext';

const SearchCompanies = () => {
    const authContext = useContext(AuthContext);

    return (
        <div>
            <h1>Finn din bedrift</h1>
            <Search/>
            <Companies/>
        </div>
    )
}

export default SearchCompanies;