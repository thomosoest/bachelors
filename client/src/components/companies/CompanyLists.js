import React from 'react';
import SearchCompanies from '../pages/SearchCompanies';
import Companies from './Companies';

const CompanyLists = () => {
    return (
    <div>
        <Companies case="owner"/>
        <Companies case="employee" />
        <SearchCompanies></SearchCompanies>
    </div>)
}


export default CompanyLists;