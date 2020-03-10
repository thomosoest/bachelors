import React, {useContext, useEffect, useState} from 'react';
import CompanyContext from '../../../context/company/companyContext';
import ProfileLink from '../../profile/ProfileLink';
import Card from '../../UI/Card';


const Ansatte = () => {

    // * Use state for Modal
    const companyContext = useContext(CompanyContext);
    const {currentCompany} = companyContext;

    useEffect(() => {
       // getBank();
        // eslint-disable-next-line
    }, []);
 

    return (<div>
        {currentCompany != null ?
            currentCompany.ansatte.map(ansatt => (
                <ProfileLink user={ansatt.user}> <Card title={ansatt.user.name} key={ansatt.user._id}/> </ProfileLink>
            )) : null
        }

    </div>)
}
//<Card title={props.skill.skill} click={displayEmployees} buttonName="Se ansatte"/>

export default Ansatte;