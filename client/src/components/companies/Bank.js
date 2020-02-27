import React, {useContext, useEffect} from 'react';
import CompanyContext from '../../context/company/companyContext';
import SkillItem from '../skill/SkillItem';


const Bank = () => {

    const companyContext = useContext(CompanyContext);
    const {getBank, bank, getBankEmployees, employees} = companyContext;
    useEffect(() => {
        getBank();
        // eslint-disable-next-line
    }, []);

    return (<div>
        {bank != null ?
        bank.bank.map(skill => (
            <SkillItem 
                key={skill.skill} 
                skill={skill} 
                getEmployees={getBankEmployees}
                employees={employees}
            />
        )) : null
        }
        
    </div>)
}


export default Bank;