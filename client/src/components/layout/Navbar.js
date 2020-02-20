import React, {Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ProfileContext from '../../context/profile/profileContext';

const Navbar = (props) => {
    const authContext = useContext(AuthContext);
    const profileContext = useContext(ProfileContext); // Necessary to clear profile

    const {isAuthenticated, logout, loading, loadUser} = authContext;
    const {clearProfile} = profileContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    const logOutAndClearProfile = () => {
        clearProfile();
        logout();
    }

    const authLinks = (
        <Fragment>
            <li>
                <Link to="/dashboard">Min profil</Link>
            </li>
            <li>
                <Link to="/">Hjem</Link>
            </li>
            <li>
                <Link to="/companies">Bedrifter</Link>
            </li>
            <li>
                <a onClick={logOutAndClearProfile} href="#!">
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