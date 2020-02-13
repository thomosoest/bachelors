import React, {useContext} from 'react';
import CompanyContext from '../../context/company/companyContext';

const CompanyItem = (props) => {
    const companyContext = useContext(CompanyContext);
    const {joinCompany} = companyContext;

    const join = () => {
        joinCompany(props.company._id);
    }

    return (
        <div className="card bg-light">
            <h3>{props.company.companyName}</h3>
            <p>Owner {props.company.user.name}</p>
            <button onClick={join} className="btn btn-dark btn-sm">JOIN</button>
        </div>
    )
};

export default CompanyItem;
