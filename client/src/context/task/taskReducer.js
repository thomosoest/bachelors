import {
    ADD_TASK,
    GET_TASK,
    GET_COMPANY_TASKS,
    ERR_TASK
} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_TASK:
            return {
                ...state,
                task: [...action.payload]
            }
        case ADD_TASK:
            return {
                ...state,
                task: action.payload
            }
        default:
            return state;
    }
}