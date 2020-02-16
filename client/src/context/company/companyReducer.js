import {
    ADD_COMPANY,
    GET_COMPANIES,
    GET_COMPANIES_BY_NAME
} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_COMPANIES_BY_NAME:
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