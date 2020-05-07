import React, {useContext} from 'react';
import Courses from '../courses/Courses';
import CourseContext from '../../context/course/courseContext';

const CompanyProfile = () => {

    const courseContext = useContext(CourseContext);

    const takeCourse = (courseID) => {
        courseContext.takeCourse(courseID);
    }

    return (
        <div>
            <h1>Tilgjengelige kurs</h1>
            <Courses case="ansatt" buttonName="Ta kurs" click={takeCourse}/>
        </div>
    );
}


export default CompanyProfile;