import React, {useContext, useEffect, useState} from 'react';
import CompanyContext from '../../../context/company/companyContext';
import ProfileLink from '../../profile/ProfileLink';
import EmployeeCard from '../../UI/EmployeeCard';


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
                <ProfileLink user={ansatt.user}> <EmployeeCard name={ansatt.user.name} key={ansatt.user._id}/> </ProfileLink>
            )) : null
        }

    </div>)
}

export default Ansatte;