import {
    ADD_COURSE,
    ERR_COURSE
} from '../types';

export default (state, action) => {
    switch(action.type){
        case ADD_COURSE:
            return {
                ...state,
                course: action.payload
            }
        default:
            return state;
    }
}