import React from 'react';
import { PromiseProvider } from 'mongoose';

const Card = ({title, text, click, buttonName, children}) => {
    return (
        <div className="card bg-light">
            <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={click} className="btn btn-dark btn-sm">{buttonName}</button>
        {children}
        </div>
    )
}

export default Card;