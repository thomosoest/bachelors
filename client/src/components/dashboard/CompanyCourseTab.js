import React, {Fragment, useContext, useEffect, useState} from 'react';
import CourseContext from '../../context/course/courseContext';
import CompanyContext from '../../context/company/companyContext';
import CourseCreate from '../courses/CourseCreate';
import Courses from '../courses/Courses';

const CompanyCourseTab = () => { 
    const courseContext = useContext(CourseContext);
    const companyContext = useContext(CompanyContext);
    const {getCompanyCourses} = courseContext;

    const [showForm, changeShowForm] = useState(false);

   /* useEffect(() => {
        getCompanyCourses(companyContext.currentCompany._id);
        console.log("COURSETAB");
        // eslint-disable-next-line
    }, []);*/

    const clickHandler = () => {
        changeShowForm(true);
    }

    return (   
        <Fragment>
            <button onClick={clickHandler}>Nytt kurs</button>
            {showForm ? <CourseCreate/> : null}
            <Courses case="owner"/>
        </Fragment>
    );
}

export default CompanyCourseTab;