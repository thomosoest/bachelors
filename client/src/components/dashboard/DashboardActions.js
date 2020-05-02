import React from 'react';
import { Link } from 'react-router-dom';

const DashBoardActions = () => {
return (
    <div className='dash-buttons'>
        <Link to='/edit-profile' class='btn btn-light'> <i class='fab fa-user-circle text-primary' /> Rediger Bio
        </Link>
    </div>
    )

}

export default DashBoardActions;