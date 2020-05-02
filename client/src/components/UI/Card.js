import React from 'react';

const Card = ({title, text, click, buttonName, children, arg}) => {

    const clickHandler = () => {
        if (click)
            if(arg) 
                click(arg);
            else click();
    }

    return (
        <div className="card bg-light half rounded">
            <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={clickHandler} className="btn btn-dark btn-sm">{buttonName}</button>
        {children}
        </div>
    )
}

export default Card;