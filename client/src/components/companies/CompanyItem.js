import React from 'react';

const CompanyItem = (props) => {
    return (
        <div className="card bg-light">
            <h3>{props.company.companyName}</h3>
            <p>Owner {props.company.user}</p>
            <button className="btn btn-dark btn-sm">JOIN</button>
        </div>
    )
};

export default CompanyItem;
