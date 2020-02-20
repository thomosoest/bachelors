import React from 'react';
import SearchCompanies from '../pages/SearchCompanies';

const CompanyDashboard = () => {
    return (<div>
        <SearchCompanies case="owner"></SearchCompanies>
        <SearchCompanies></SearchCompanies>


    </div>)
}


export default CompanyDashboard;