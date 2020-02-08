import React, {Fragment, useContext} from 'react';
import CompanyContext from '../../context/company/companyContext';
import CompanyItem from '../../components/companies/CompanyItem';

const Companies = () => {
    const companyContext = useContext(CompanyContext);
    const {companies} = companyContext;

    return (
        <Fragment>
            {companies.map(company => (
            <CompanyItem key={company.id} company={company}/>
            ))}
        </Fragment>
    );
}

export default Companies;