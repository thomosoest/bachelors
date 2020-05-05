import React, {useReducer} from 'react';
import axios from 'axios';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
import {
    ADD_TASK,
    //GET_TASK,
    GET_COMPANY_TASKS,
    GET_USER_TASKS,
    ADD_EMPLOYEE,
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

    // ADD EMPLOYEE
    const addEmployee = async (id, employees) => {
        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        };

        try {
            let body = {employees: employees};
            console.log(body);
            const res = await axios.put(`/api/task/join/${id}`, body, config);
           /* dispatch({
                type: ADD_EMPLOYEE,
                payload: res.data
            });*/
        } catch (err) {
            dispatch({
                type: ERR_TASK,
                payload: err.response.msg
            });
        }
    }

const getCompanyTasks = async companyId => {
        
    try {
        const res = await axios.get(`/api/task/company/${companyId}`);
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

const getUserTasks = async employee => {
    try {
        const res = await axios.get(`/api/task/user/${employee}`);
        dispatch({
            type: GET_USER_TASKS,
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
            employee: state.employee,
        
            addTask,
            addEmployee,
            getCompanyTasks,
            getUserTasks
        }}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskState;