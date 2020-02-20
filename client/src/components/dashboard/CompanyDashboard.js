import React from 'react';
import SearchCompanies from '../pages/SearchCompanies';
import Companies from '../companies/Companies';

const CompanyDashboard = () => {
    return (<div>
        <Companies case="owner"/>
        <SearchCompanies></SearchCompanies>


    </div>)
}


export default CompanyDashboard;