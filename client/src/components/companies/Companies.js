import React, {Fragment, useContext, useEffect} from 'react';
import CompanyContext from '../../context/company/companyContext';
import CompanyItem from '../../components/companies/CompanyItem';


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
    let title = <h2>{props.title}</h2>;

    switch(props.case){
        case "owner": selectedCompanies = ownedCompanies; break;      
        case "all": selectedCompanies = companies; break;
        case "employee": selectedCompanies = joinedCompanies; break;
              
        default: selectedCompanies = companies;
                
    }

    return (
   
        <Fragment>
            {selectedCompanies.length > 0 ?(<h2>{props.title}</h2>) : null}
            {selectedCompanies !== null?(
            selectedCompanies.map(company => (
                (company === null)? 
                    (null):
                   (<CompanyItem key={company._id} case={props.case} company={company}/>)
            ))): null
        }
        </Fragment>
    );
}

export default Companies;