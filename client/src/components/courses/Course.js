import React, {useContext, useEffect} from 'react';
import CourseCreate from '../courses/CourseCreate';
import CourseContext from '../../context/course/courseContext';
import CompanyContext from '../../context/company/companyContext';

const Course = () => {
    const courseContext = useContext(CourseContext);
    const {courses, getCompanyCourses} = courseContext; 
    const companyContext = useContext(CompanyContext);
    const {currentCompany} = companyContext;

    useEffect(() => {
        getCompanyCourses(currentCompany._id);
        console.log("useEffect Course ran");
        // eslint-disable-next-line
    }, []);

    return (
    
        <div>
            <CourseCreate/>   
        </div>

    )

}


export default Course;