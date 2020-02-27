import React from 'react'


const SkillItem = (props) => {

    const displayEmployees = () => {
        props.getEmployees(props.skill.skill);
        console.log(props.employees);
    }

    return(

        <div className="card bg-light">
            <p>{props.skill.skill}</p> 
            <button onClick={displayEmployees} className="btn btn-dark btn-sm">Se kompetanse</button>
        {props.employees ?  (<p>Finnes</p>) : (<p>Ikke</p>)}
        </div>

    )



}


export default SkillItem;