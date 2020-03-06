import React, {Fragment, useContext, useEffect} from 'react';
import CourseContext from '../../context/course/courseContext';
import CourseItem from '../../components/courses/CourseItem';
import CompanyContext from '../../context/company/companyContext';

const Courses = (props) => { 
    const courseContext = useContext(CourseContext);
    const companyContext = useContext(CompanyContext);
    const {courses, getCompanyCourses} = courseContext;

    useEffect(() => {
        getCompanyCourses(companyContext.currentCompany._id);
        // eslint-disable-next-line
    }, []);

    return (   
        <Fragment>
            {courses.map(course => (
            <CourseItem key={course._id} case={props.case} course={course}/>
            ))}
        </Fragment>
    );
}

export default Courses;