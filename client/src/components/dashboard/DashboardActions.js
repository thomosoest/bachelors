import React from 'react';
import { Link } from 'react-router-dom';

const DashBoardActions = () => {
return (
    <div class='dash-buttons'>
        <Link to='/edit-profile' class='btn btn-light'>
            <i class='fab fa-user-circle text-primary' /> Edit Profile
        </Link>

    </div>
)

}

/*        Flere knapper
    <Link to='/knapp2' class='btn btn-light'>
            <i class='fab fa-black-tie text-primary' /> knapp2
        </Link>
        <Link to='/knapp3' class='btn btn-light'>
            <i class='fab fa-graduation-cap text-primary' /> knapp3
        </Link>
 */


export default DashBoardActions;