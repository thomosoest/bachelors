import React from 'react';
import Companies from '../../components/companies/Companies';
import Search from '../companies/Search';

const SearchCompanies = () => {
   
    return (
        <div className="padding1">
            <h1 >Bli med en bedrift</h1>
            <Search/>
            <Companies/>
        </div>
    )
}

export default SearchCompanies;