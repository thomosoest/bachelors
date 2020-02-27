import React from 'react'
import Card from '../../UI/Card';



const SkillItem = (props) => {

    const displayEmployees = () => {
        props.getEmployees(props.skill.skill);
        console.log(props.employees);
        props.showModal();
    }

    return(
        <div>
            <Card title={props.skill.skill} click={displayEmployees} buttonName="Se ansatte"/>
        </div>

    )



}


export default SkillItem;