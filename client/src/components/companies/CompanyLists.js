import React from 'react';
import SearchCompanies from '../pages/SearchCompanies';
import Companies from './Companies';

const CompanyLists = () => {
    return (
    <div>
        <SearchCompanies></SearchCompanies>
        <div>
            
            <Companies case="owner" title="Bedrifter du eier"/>
            <Companies case="employee" title="Bedrifter du er med i" />
        </div>
    </div>)
}


export default CompanyLists;