import React, {useReducer} from 'react';
import axios from 'axios';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';
import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    CREATE_PROFILE
} from '../types';

const ProfileState = props => {
    const initialState = {
            profile: null,
            profiles: [],
            loading: true,
            error: {}
    };

    const [state, dispatch] = useReducer(profileReducer, initialState);

    const getCurrentProfile = async () => {
        
        try {
            const res = await axios.get("/api/profile/me");
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    }

    const createProfile = async profileData => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            const res = await axios.post("/api/profile", profileData, config);
            dispatch({
                type: CREATE_PROFILE,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    }

    const clearProfile = () => {
        dispatch({type: CLEAR_PROFILE});
    }


    // GET Profiles

    return (
        <ProfileContext.Provider 
        value={{
            profile: state.profile,
            profiles: state.profiles,
            loading: state.loading,

            getCurrentProfile,
            clearProfile,
            createProfile
        }}>
            {props.children}
        </ProfileContext.Provider>
    );
};

export default ProfileState;