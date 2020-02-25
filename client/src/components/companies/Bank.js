import React, {useContext, useEffect} from 'react';
import CompanyContext from '../../context/company/companyContext';



const Bank = () => {

    const companyContext = useContext(CompanyContext);

    useEffect(() => {
        companyContext.getBank();
        // eslint-disable-next-line
    }, []);

    return (<div>

        <p>Bank1</p>

    </div>)
}


export default Bank;