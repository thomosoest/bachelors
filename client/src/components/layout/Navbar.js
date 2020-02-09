import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = (props) => {
    const authContext = useContext(AuthContext);

    const {isAuthenticated, logout, loading} = authContext;

    const authLinks = (
        <Fragment>
            <li>
                <Link to="/companies">Bedrifter</Link>
            </li>
            <li>
                <a onClick={logout} href="#!">
                    <i className="fas fa-sign-out-alt"/>
                    Logg ut
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to="/login">Logg inn</Link>
            </li>
            <li>
                <Link to="/register">Registrer</Link>
            </li>
        </Fragment>
    );

    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={props.icon}> {props.title}</i>
            </h1>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {!loading && (<Fragment>
                    {isAuthenticated? authLinks : guestLinks}
                </Fragment>)}
            </ul>
        </div>
    )
}

Navbar.defaultProps = {
    title: "Kompi",
    icon: "fas fa-id-card-alt"
};

export default Navbar;