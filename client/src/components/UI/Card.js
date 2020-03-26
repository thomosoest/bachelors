import React from 'react';
import { PromiseProvider } from 'mongoose';

const Card = ({title, text, click, buttonName, children, arg}) => {

    const clickHandler = () => {
        if(arg !== null)
            click(arg);
        else click();
    }

    return (
        <div className="card bg-light">
            <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={clickHandler} className="btn btn-dark btn-sm">{buttonName}</button>
        {children}
        </div>
    )
}

export default Card;