import React from 'react'


const SkillItem = (props) => {

    return(

        <div className="card bg-light">
            <p>{props.skill.skill}</p> 
            <button className="btn btn-dark btn-sm">Se kompetanse</button>
        </div>

    )



}


export default SkillItem;