import React, {useContext} from 'react';
import ProfileContext from '../../context/profile/profileContext';


const ShowProfile = (props) => {

    const {userProfile, getUserProfile} = useContext(ProfileContext);
    getUserProfile(props.match.params.user);

    return (
        <div>
            <div className="card Half">
                    <img src="https://image.shutterstock.com/image-vector/example-stamp-600w-426673501.jpg" class="w3-round" alt="Norway"></img>
                    <p>Navn:              {userProfile && userProfile.user.name}</p>
                    <p>Firma:                                                       </p>
                    <p>Jobbtittel:                  {userProfile && userProfile.title}</p>
            </div>

            <div className="card Half">
                    <p>Bio:                  {userProfile && userProfile.bio}</p>
            </div>
        </div>
    );
}

export default ShowProfile;