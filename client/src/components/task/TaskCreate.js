import React, {useState, useContext} from 'react';
import TaskContext from '../../context/task/taskContext';
import CompanyContext from '../../context/company/companyContext';

const TaskCreate = () => {
    
    const onChange = e => setTask({ ...task, [e.target.name]: e.target.value });
    const taskContext = useContext(TaskContext);
    const companyContext = useContext(CompanyContext);
    
    const [ task, setTask] = useState({
        taskName: '',
        company: companyContext.currentCompany._id,
        description: '',
        employees: '',
        completion: ''
        
    });

    const { taskName, company, description, employees, completion } = task;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        taskContext.addTask(
            {taskName, company, description, employees, completion}
        );
    }

  
    return(<div>
            <form onSubmit={onSubmitHandler} className="form">
                <input 
                    type="text" 
                    name="taskName" 
                    onChange={onChange}
                    value={task.taskName}
                    placeholder="Hva heter oppgaven?"
                />
                <input 
                    type="text" 
                    name="employees" 
                    onChange={onChange}
                    value={task.employees}
                    placeholder="Hvilken ansatte?"
                />
                <input 
                    type="text" 
                    name="description" 
                    onChange={onChange}
                    value={task.description}
                    placeholder="Beskrivelse av kurset"
                />
                <input 
                    type="text" 
                    name="completion" 
                    onChange={onChange}
                    value={task.completion}
                    placeholder="Når skal kurset være ferdig?"
                />
                <input
                    type="submit"
                    value="Opprett oppgave"
                    className="btn btn-dark btn-block"
                />
            </form>
        </div>
    )
}

export default TaskCreate;