import React from 'react';

const Competencies = (props) => {
    return (
        <div>
            <h2>Kompetencies</h2>
            {props.competencies.map(skill => {
                return (
                    <div>
                        <h3>{skill.skill}</h3>
                        { skill.competencies.map(competency => {
                            return <p>{competency}</p>
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Competencies;