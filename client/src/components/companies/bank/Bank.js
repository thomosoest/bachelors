import React, {useContext, useEffect, useState} from 'react';
import CompanyContext from '../../../context/company/companyContext';
import SkillItem from './SkillItem';
import Modal from '../../UI/Modal';
import ProfileLink from '../../profile/ProfileLink';


const Bank = () => {

    // * Use state for Modal
    const [showModal, setModal] = useState(false);
    const companyContext = useContext(CompanyContext);
    const {getBank, bank, getBankEmployees, employees} = companyContext;

    useEffect(() => {
        getBank();
        // eslint-disable-next-line
    }, []);


    const modalOn = () => {
        setModal(true);
    }

    const modalOff = () => {
        setModal(false);
    }

    return (<div>
        {bank != null ?
            bank.map(skill => (
                <SkillItem 
                    key={skill.skill} 
                    skill={skill} 
                    getEmployees={getBankEmployees}
                    employees={employees}
                    showModal={modalOn}
                />
            )) : null
        }

        <Modal show={showModal} clicked={modalOff} >
            {employees != null ?
                employees.map(user => (
                    <div key={user._id}>
                        <ProfileLink user={user.user}/>
                    </div>
                )) : null
            }
        </Modal>
        
    </div>)
}


export default Bank;