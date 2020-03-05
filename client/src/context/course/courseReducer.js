import {
    ADD_COURSE,
    GET_COMPANY_COURSES,
    ERR_COURSE
} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_COMPANY_COURSES:
            return {
                ...state,
                courses: [...action.payload]
            }
        case ADD_COURSE:
            return {
                ...state,
                course: action.payload
            }
        default:
            return state;
    }
}