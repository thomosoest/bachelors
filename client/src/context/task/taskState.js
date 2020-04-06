import React, {useReducer} from 'react';
import axios from 'axios';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
import {
    ADD_TASK,
    GET_TASK,
    GET_COMPANY_TASKS,
    //GET_SINGLE_TASK
    ERR_TASK
} from '../types';

const TaskState = props => {
    const initialState = {
        task: null,
        tasks: [],
        loading: true
    };

    const [state, dispatch] = useReducer(taskReducer, initialState);

    
    // ADD TASK
    const addTask = async taskFields => {
        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        };

        try {
            const res = await axios.post("/api/task", taskFields, config);
            dispatch({
                type: ADD_TASK,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_TASK,
                payload: err.response.msg
            });
        }
    }

        // GET TASKS
        const getTask = async () => {
        
            try {
                const res = await axios.get("/api/task");
                dispatch({
                    type: GET_TASK,
                    payload: res.data
                });
            } catch (err) {
                dispatch({
                    type: ERR_TASK,
                    payload: err.response.msg
                });
            }
        }


/* 
    const getSingleTask = async taskId => {
        
        try {
            const res = await axios.get(`/api/task/${taskId}`);
            console.log(res.data);
            dispatch({
                type: GET_SINGLE_TASK,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_TASK,
                payload: err.response.msg
            });
        }
    }

*/


const getCompanyTasks = async companyId => {
        
    try {
        const res = await axios.get(`/api/task/company/${companyId}`);
        console.log(res.data);
        dispatch({
            type: GET_COMPANY_TASKS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ERR_TASK,
            payload: err.response.msg
        });
    }
}

    return (
        <TaskContext.Provider 
        value={{
            task: state.task,
            tasks: state.tasks,
            loading: state.loading,

            addTask,
            getTask
        }}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskState;