import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE
} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_PROFILE:
            return {
                ...state, 
                profile: action.payload, 
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case CLEAR_PROFILE: 
            return {
                ...state,
                profile: null,
                profiles: [],
                loading: false,
                error: null
            };
        default:
            return state;
    }
}