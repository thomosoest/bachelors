import React from 'react';

const CourseFullItem = (props) => {
    return (<div className="card bg-light">
        <h1>{props.course.name}</h1>
        <p>{props.course.description}</p>

        <h3>Oppnåelige kompetanser</h3>
        {
            
                props.course.competencies.map((competency, index) => (
                <div key={index}>  
                    <p>Område: {competency.skill} </p>
                    <p>Kompetanse: {competency.competency} </p>
                </div>) )   
                
        }

    </div>);
}

export default CourseFullItem;