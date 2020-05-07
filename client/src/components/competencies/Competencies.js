import React from 'react';

const Competencies = (props) => {
    return (
        <div>
            <h2>Kompetanser</h2>
            {props.competencies.map((skill, i) => {
                return (
                    <div key={i}>
                        <h3>{skill.skill}</h3>
                        { skill.competencies.map((competency, j) => {
                            return <p key={j}>{competency}</p>
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Competencies;