import React from 'react'
import Card from '../../UI/Card';
import PropTypes from 'prop-types';


const SkillItem = (props) => {

    const displayEmployees = () => {
        props.getEmployees(props.skill.skill);
        props.updateSkill(props.skill.skill);
        props.showModal();
    }

    return(
        <div>
            <Card title={props.skill.skill} click={displayEmployees} buttonName="Se ansatte"/>
        </div>

    )
}

SkillItem.propTypes = {
    getEmployees : PropTypes.func,
    updateSkill : PropTypes.func,
    showModal : PropTypes.func,
    skill : PropTypes.object
};


export default SkillItem;