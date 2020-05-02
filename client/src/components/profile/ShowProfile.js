import React, {useContext} from 'react';
import ProfileContext from '../../context/profile/profileContext';


const ShowProfile = (props) => {

    const {userProfile, getUserProfile} = useContext(ProfileContext);
    getUserProfile(props.match.params.user);

    return (
        <div>
            <div className="card profile-width rounded">
                    <img src="https://image.shutterstock.com/image-vector/example-stamp-600w-426673501.jpg" className="w3-round" alt="Norway"></img>
                    <h2>{userProfile && userProfile.user.name}</h2> 
                    <p><i className="fa fa-briefcase fa-fw text-primary"></i>Jobbtittel: {userProfile && userProfile.title}</p>
            </div>

            <div className="card profile-width rounded">
                    <p>Bio:                  {userProfile && userProfile.bio}</p>
            </div>
        </div>
    );
}

export default ShowProfile;