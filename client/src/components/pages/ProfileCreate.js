import React, {useState, useContext} from 'react';
import ProfileContext from '../../context/profile/profileContext';
import { useHistory } from 'react-router-dom';

const ProfileCreate = () => {
    const history = useHistory();
    const [ profile, setProfile] = useState({
        bio: '',
        skills: '',
        experiences: '',
        title: ''
    });

    const { bio, skills, title, experiences } = profile;

    const onChange = e => setProfile({ ...profile, [e.target.name]: e.target.value });
    const profileContext = useContext(ProfileContext);
    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        profileContext.createProfile(
            {bio, skills, title, experiences}
        );
        history.push("dashboard");
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
                    type="text" 
                    name="experiences" 
                    onChange={onChange}
                    value={profile.experiences}
                    placeholder="Dine jobb-erfaringer adskilt med komma (,)..."
                />
                <input 
                    type="text" 
                    name="title" 
                    onChange={onChange}
                    value={profile.title}
                    placeholder="Din nåværende jobb tittel"
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