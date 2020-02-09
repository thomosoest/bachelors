import React, {Fragment, useContext, useEffect} from 'react';
import CompanyContext from '../../context/company/companyContext';
import CompanyItem from '../../components/companies/CompanyItem';

const Companies = () => {
    const companyContext = useContext(CompanyContext);
    const {companies, getCompanies} = companyContext;

    useEffect(() => {
        getCompanies();
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            {companies.map(company => (
            <CompanyItem key={company._id} company={company}/>
            ))}
        </Fragment>
    );
}

export default Companies;