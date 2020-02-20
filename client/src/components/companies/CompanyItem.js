import React, {useContext} from 'react';
import CompanyContext from '../../context/company/companyContext';

const CompanyItem = (props) => {
    const companyContext = useContext(CompanyContext);
    const {joinCompany} = companyContext;

    const join = () => {
        joinCompany(props.company._id);
    }

    let output = <button onClick={join} className="btn btn-dark btn-sm">JOIN</button>;
    if (props.case === "owner") {
        output = null;
    } 
    else if(props.case === "employee") {
        output = <p>Employee view</p>;
    }

    return (
        <div className="card bg-light">
            <h3>{props.company.companyName}</h3>
            <p>Owner {props.company.user.name}</p>
            {output}
        </div>
    )
};

export default CompanyItem;
