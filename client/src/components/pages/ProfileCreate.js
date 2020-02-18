import React, {useState, useContext} from 'react';
import ProfileContext from '../../context/profile/profileContext';

const ProfileCreate = () => {
    const [ profile, setProfile] = useState({
        bio: '',
        skills: ''
    });

    const { bio, skills } = profile;

    const onChange = e => setProfile({ ...profile, [e.target.name]: e.target.value });
    const profileContext = useContext(ProfileContext);
    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        profileContext.createProfile(
            {bio, skills}
        );
    }

  
    return(<div>
            <form onSubmit={onSubmitHandler} className="form">
                <input 
                    type="text" 
                    name="bio" 
                    onChange={onChange}
                    value={profile.bio}
                    placeholder="Beskriv deg selv..."
                />
                <input 
                    type="text" 
                    name="skills" 
                    onChange={onChange}
                    value={profile.skills}
                    placeholder="Dine kompetanser adskilt med komma (,)..."
                />
                <input
                    type="submit"
                    value="Opprett profil"
                    className="btn btn-dark btn-block"
                />
            </form>
        </div>
    )
}

export default ProfileCreate;