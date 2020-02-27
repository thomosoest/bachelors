import React from 'react';

const Card = ({title, text, click, buttonName}) => {
    return (
        <div className="card bg-light">
            <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={click} className="btn btn-dark btn-sm">{buttonName}</button>
        </div>
    )
}

export default Card;