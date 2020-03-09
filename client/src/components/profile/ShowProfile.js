import React, {useContext} from 'react';
import ProfileContext from '../../context/profile/profileContext';


const ShowProfile = (props) => {

    const {userProfile, getUserProfile} = useContext(ProfileContext);
    
    getUserProfile(props.match.params.user);

    

    console.log(userProfile);

    return (
        <div class="card Half">
                    <p>Brukernavn:     {userProfile && userProfile.user.name}</p>
                    <p>Bio:                     {userProfile && userProfile.bio}</p>
                    <p>Firma:                   </p>
                    <p>Tittel:                  {userProfile && userProfile.title}</p>
        </div>
    );
}

export default ShowProfile;