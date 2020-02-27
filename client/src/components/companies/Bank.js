import React, {useContext, useEffect} from 'react';
import CompanyContext from '../../context/company/companyContext';
import SkillItem from '../skill/SkillItem';


const Bank = () => {

    const companyContext = useContext(CompanyContext);
    const {getBank, bank} = companyContext;
    useEffect(() => {
        companyContext.getBank();
        // eslint-disable-next-line
    }, []);

       getBank();
    return (<div>
        {bank != null ?
        bank.bank.map(skill => (<SkillItem key={skill.skill} skill={skill}/>
        )) : null
        }
        
    </div>)
}


export default Bank;