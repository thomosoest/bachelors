import React, {useContext} from 'react';
import ProfileContext from '../../context/profile/profileContext';

const ShowProfile = (props) => {

    const {userProfile, getUserProfile} = useContext(ProfileContext);
    getUserProfile(props.match.params.user);

    return (
        <div>
            <p>User profile here</p>
        </div>
    );
}

export default ShowProfile;