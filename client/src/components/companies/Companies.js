import React, {Fragment, useContext, useEffect} from 'react';
import CompanyContext from '../../context/company/companyContext';
import CompanyItem from '../../components/companies/CompanyItem';
import PropTypes from 'prop-types';




const Companies = (props) => {
    const companyContext = useContext(CompanyContext);
    const {
        companies, 
        ownedCompanies, 
        joinedCompanies, 
        getCompanies, 
        getOwnedCompanies, 
        getJoinedCompanies} = companyContext;

    useEffect(() => {
        switch(props.case){
            case "owner": getOwnedCompanies(); break;
            case "all" : getCompanies(); break;
            case "employee": getJoinedCompanies(); break;
            default: break;
        }
    
        // eslint-disable-next-line
    }, []);

    let selectedCompanies = [];

    switch(props.case){
        case "owner": selectedCompanies = ownedCompanies; break;      
        case "all": selectedCompanies = companies; break;
        case "employee": selectedCompanies = joinedCompanies; break;
              
        default: selectedCompanies = companies;
                
    }

    return (
   
        <Fragment>
            
            {selectedCompanies.length > 0 ?(<h2>{props.title}</h2>) : null}
            <div className="flex-container">
            {selectedCompanies !== null?(
            selectedCompanies.map(company => (
                (company === null)? 
                    (null):
                   (<CompanyItem key={company._id} case={props.case} company={company}/>)
            ))): null
            }
            </div>
        </Fragment>
    );
}

Companies.propTypes = {
    case: PropTypes.string,
    title: PropTypes.string
};

export default Companies;