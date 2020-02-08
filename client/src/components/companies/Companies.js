import React, {Fragment, useContext} from 'react';
import CompanyContext from '../../context/company/companyContext';

const Companies = () => {
    const companyContext = useContext(CompanyContext);
    const {companies} = companyContext;

    return (
        <Fragment>
            {companies.map(company => (
            <h3>{company.companyName}</h3>
            ))}
        </Fragment>
    );
}

export default Companies;