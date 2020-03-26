import React, {useContext, useEffect, useState} from 'react';
import CompanyContext from '../../../context/company/companyContext';
import SkillItem from './SkillItem';
import Modal from '../../UI/Modal';
import ProfileLink from '../../profile/ProfileLink';
import Card from '../../UI/Card';
import {VictoryBar, VictoryChart} from 'victory';

const Bank = () => {

    // * Use state for Modal
    const [showModal, setModal] = useState(false);
    const companyContext = useContext(CompanyContext);
    const {getBank, getGraphData, graphData, bank, getBankEmployees, employees} = companyContext;

    useEffect(() => {
        getBank();
        getGraphData();
        // eslint-disable-next-line
    }, []);


    const modalOn = () => {
        setModal(true);
    }

    const modalOff = () => {
        setModal(false);
    }

    return (<div>
        {graphData.length > 0 ? (
            <VictoryChart domainPadding={20}>
                <VictoryBar
                    data={graphData}
                    x="skill"
                    y="employee_count"
                />
            </VictoryChart>
        ) : null}

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
                        <Card title={user.user.name} buttonName="Legg til oppdrag">
                            <ProfileLink user={user.user}>
                                <p>til profil</p>
                            </ProfileLink>
                        </Card>
                    </div>
                )) : null
            }
        </Modal>
        
    </div>)
}


export default Bank;