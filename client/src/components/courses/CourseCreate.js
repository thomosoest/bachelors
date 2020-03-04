import React, {useState, useContext} from 'react';
import CourseContext from '../../context/course/courseContext';
import CompanyContext from '../../context/company/companyContext';

const CourseCreate = () => {
    
    const onChange = e => setCourse({ ...course, [e.target.name]: e.target.value });
    const courseContext = useContext(CourseContext);
    const companyContext = useContext(CompanyContext);
    
    const [ course, setCourse] = useState({
        name: '',
        skills: '',
        date: '',
        description: '',
        company: companyContext.currentCompany._id
    });

    const { name, skills, date, description, company } = course;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        courseContext.addCourse(
            {name, skills, date, description, company}
        );
    }

  
    return(<div>
            <form onSubmit={onSubmitHandler} className="form">
                <input 
                    type="text" 
                    name="name" 
                    onChange={onChange}
                    value={course.name}
                    placeholder="Hva heter kurset...?"
                />
                <input 
                    type="text" 
                    name="skills" 
                    onChange={onChange}
                    value={course.skills}
                    placeholder="Oppnåelige kompetanser adskilt med komma (,)..."
                />
                <input 
                    type="text" 
                    name="description" 
                    onChange={onChange}
                    value={course.description}
                    placeholder="Beskrivelse av kurset"
                />
                <input 
                    type="text" 
                    name="date" 
                    onChange={onChange}
                    value={course.date}
                    placeholder="Når skal kurset være?"
                />
                <input
                    type="submit"
                    value="Opprett kurs"
                    className="btn btn-dark btn-block"
                />
            </form>
        </div>
    )
}

export default CourseCreate;