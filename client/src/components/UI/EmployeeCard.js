import React from 'react';

const EmployeeCard = ({name, text}) => {
    return (
        <div className="card Half">
            <h3>{name}</h3>
        <p>{text}</p>
        </div>
    )
}

export default EmployeeCard;