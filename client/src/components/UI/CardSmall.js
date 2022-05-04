import React from 'react';
import { USER_LOADED } from '../../context/types';

const CardSmall = ({title, text, click, buttonName, children, arg, date, status}) => {

    

    const clickHandler = () => {
        if (click)
            if(arg) 
                click(arg);
            else click();
    }

   

    return (
        <div className="card bg-light half rounded flex-container">
        {title}
        {(buttonName || click)? 
            (<button onClick={clickHandler} className="btn btn-dark btn-sm text-right">{buttonName}</button>) 
            : null}
        </div>
    )
}

export default CardSmall;