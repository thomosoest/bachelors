import React from 'react';
import Courses from '../courses/Courses';

const CompanyProfile = () => {
    return (
        <div>
            <h1>Tilgjengelige kurs</h1>
            <Courses case="ansatt"/>
        </div>
    );
}


export default CompanyProfile;