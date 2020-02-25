import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const CompanyDashNav = (props) => {
    

    const guestLinks = (
        <Fragment>
            <li>
                <Link to="/bank">Kompetansebank</Link>
            </li>
            <li>
                <Link to="/test">Kurs</Link>
            </li>
        </Fragment>
    );

    return (
        
        <div className="navbar bg-primary">
            <h1>
                <i className={props.icon}> {props.title}</i>
            </h1>
            <ul>
                {guestLinks}
            </ul>
       </div>
    )
}

CompanyDashNav.defaultProps = {
    title: "Kompi",
    icon: "fas fa-id-card-alt"
};

export default CompanyDashNav;