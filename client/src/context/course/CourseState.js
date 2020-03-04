import React, {useReducer} from 'react';
import axios from 'axios';
import CourseContext from './courseContext';
import courseReducer from './courseReducer';
import {
    ADD_COURSE,
    ERR_COURSE
    
} from '../types';

const CourseState = props => {
    const initialState = {
        course: null,
        courses: [],
        loading: true
    };

    const [state, dispatch] = useReducer(courseReducer, initialState);

    
    // ADD COURSE
    const addCourse = async courseFields => {
        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        };

        try {
            const res = await axios.post("/api/courses", courseFields, config);
            dispatch({
                type: ADD_COURSE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_COURSE,
                payload: err.response.msg
            });
        }
    }



    return (
        <CourseContext.Provider 
        value={{
            course: state.course,
            courses: state.courses,
            loading: state.loading,

            addCourse
        }}>
            {props.children}
        </CourseContext.Provider>
    );
};

export default CourseState;