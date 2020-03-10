import React, {useContext} from 'react';
import CompanyContext from '../../context/company/companyContext';
import { useHistory } from 'react-router-dom';
import Card from '../UI/Card';

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


    let output = null;
    switch (props.case ) {
        case "owner":
                output = <Card 
                    title={props.company.companyName}
                    text={"Eier: " + props.company.user.name}
                    click={toDashboard}
                    buttonName="Se dashbord"
                />
            break;
        case "employee":  
                output = <Card 
                    title={props.company.companyName}
                />      
            break;
    
        default: 
                output = <Card 
                    title={props.company.companyName}
                    text={"Eier: " + props.company.user.name}
                    click={join}
                    buttonName="Bli med"
                />
            break;
    }

    return (
        output
    )
};

export default CompanyItem;
