import {
    ADD_COMPANY,
    JOIN_COMPANY,
    ERR_COMPANY,
    GET_COMPANIES
} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_COMPANIES:
            return {
                ...state,
                companies : action.payload,
                loading: false
            }
        case ADD_COMPANY:
            return {
                ...state,
                companies : [...state.companies, action.payload],
                loading: false
            };
        default:
            return state;
    }
}