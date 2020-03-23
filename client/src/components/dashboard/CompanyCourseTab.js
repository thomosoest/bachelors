import React, {Fragment, useContext, useEffect} from 'react';
import CourseContext from '../../context/course/courseContext';
import CourseItem from '../../components/courses/CourseItem';
import CompanyContext from '../../context/company/companyContext';
import CourseCreate from '../courses/CourseCreate';
import Courses from '../courses/Courses';

const CompanyCourseTab = (props) => { 
    const courseContext = useContext(CourseContext);
    const companyContext = useContext(CompanyContext);
    const {courses, getCompanyCourses} = courseContext;

    useEffect(() => {
        getCompanyCourses(companyContext.currentCompany._id);
        // eslint-disable-next-line
    }, []);

    return (   
        <Fragment>
            <CourseCreate/>
            <Courses case="owner"/>
        </Fragment>
    );
}

export default CompanyCourseTab;