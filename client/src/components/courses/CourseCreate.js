import React, {useState, useContext} from 'react';
import CourseContext from '../../context/course/courseContext';
import CompanyContext from '../../context/company/companyContext';

const CourseCreate = () => {
    
    const onChange = e => setCourse({ ...course, [e.target.name]: e.target.value });
    
    const courseContext = useContext(CourseContext);
    const companyContext = useContext(CompanyContext);

    const [competencies, setComopetencies] = useState([{skill: "", competency: ""}]);

    const addCompetency = () => {
        setComopetencies([...competencies, {skill: "", competency: ""}])
    }

    const onChangeCompetency = (e, index) => {
        const newCompetencies = [...competencies];
        newCompetencies[index] = {...newCompetencies[index], [e.target.name]: e.target.value};
        setComopetencies(newCompetencies)
    }
    
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
                <h1>Kompetanse del</h1>
                <p>For hver kompetanse skal det skrives kun ett fagområde, og én kompetanse under. </p>
                {
                competencies.map((comp, index) => 
                <div key={index}>
                    <input 
                        type="text" 
                        name="skill"
                        onChange={(e)=> onChangeCompetency(e, index)}
                        value={comp.skill}
                        placeholder="område.. F.eks PHP"
                    />
                    <input 
                        type="text" 
                        name="competency"
                        onChange={(e)=> onChangeCompetency(e, index)}
                        value={comp.competeny}
                        placeholder="kompetanse. F.eks Kan bruke php på en måte slik at..."
                    />
                </div>
                )}
                <button onClick={addCompetency}>Ny kompetanse</button>
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