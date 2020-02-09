import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = (props) => {
    const authContext = useContext(AuthContext);

    const {isAuthenticated, logout, user} = authContext;

    const authLinks = (
        <Fragment>
            <li>Hello</li>
            <li>
                <a href="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-sm">Logg ut</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>Hello</li>
            <li>
                <a href="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-sm">Logg ut</span>
                </a>
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
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.defaultProps = {
    title: "Kompi",
    icon: "fas fa-id-card-alt"
};

export default Navbar;