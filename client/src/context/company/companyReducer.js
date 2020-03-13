import {
    ADD_COMPANY,
    GET_COMPANIES,
    GET_COMPANIES_BY_NAME,
    GET_OWNED_COMPANIES,
    GET_JOINED_COMPANIES,
    CLEAR_SEARCH_COMPANIES,
    GET_CURRENT_COMPANY,
    GET_BANK,
    GET_BANK_EMPLOYEES,
    GET_GRAPH_DATA
} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_GRAPH_DATA:
            return {
                ...state,
                graphData: [...action.payload]
            }
        case GET_BANK_EMPLOYEES:
            return {
                ...state,
                employees: [...action.payload]
            }
        case GET_BANK: 
            return {
                ...state,
                bank: [...action.payload],
                loading: false
            }
        case GET_CURRENT_COMPANY:
            return {
                ...state,
                currentCompany: action.payload,
                loading: false
            }
        case CLEAR_SEARCH_COMPANIES:
            return {
                ...state,
                ownedCompanies: [...state.ownedCompanies],
                companies: [],
                loading: false
            }
        case GET_OWNED_COMPANIES:
            return {
                ...state,
                ownedCompanies: action.payload,
                loading: false
            }
        case GET_JOINED_COMPANIES:
            return {
                ...state,
                joinedCompanies: action.payload,
                loading: false
            }
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
             //   companies : [...state.companies, action.payload],
                loading: false
            };
        default:
            return state;
    }
}