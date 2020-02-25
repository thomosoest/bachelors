import React, {useContext} from 'react';
import CompanyContext from '../../context/company/companyContext';
import { useHistory } from 'react-router-dom';

const CompanyItem = (props) => {
    const history = useHistory();
    const companyContext = useContext(CompanyContext);
    const {joinCompany, getCurrentCompany} = companyContext;

    const join = () => {
        joinCompany(props.company._id);
    }

    const toDashboard = () => {
        console.log("To Dashboard");
        getCurrentCompany(props.company._id);
        history.push("company-dashboard");
    }



    let output = <button onClick={join} className="btn btn-dark btn-sm">Bli Med</button>;
    switch (props.case ) {
        case "owner":
                output = <button onClick={toDashboard} className="btn btn-dark btn-sm">Se Dashbord</button>;
            break;
        case "ansatt":
            output = <p>Ansatt perspektiv</p>;        
            break;
    
        default: output = <button onClick={join} className="btn btn-dark btn-sm">Bli Med</button>;
            break;
    }

    return (
        <div className="card bg-light">
            <h3>{props.company.companyName}</h3>
            <p>Eier {props.company.user.name}</p>
            {output}
        </div>
    )
};

export default CompanyItem;
