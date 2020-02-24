import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const DashNavbar = (props) => {
    

    const guestLinks = (
        <Fragment>
            <li>
                <Link to="/test">Hei</Link>
            </li>
            <li>
                <Link to="/test">Ho</Link>
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

DashNavbar.defaultProps = {
    title: "Kompi",
    icon: "fas fa-id-card-alt"
};

export default DashNavbar;