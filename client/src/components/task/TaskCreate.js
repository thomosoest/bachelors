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
        date: ''
        
    });

    const { taskName, company, description, date } = task;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        taskContext.addTask(
            {taskName, company, description, date}
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
                    name="description" 
                    onChange={onChange}
                    value={task.description}
                    placeholder="Beskrivelse av oppgaven"
                />
                <input 
                    type="text" 
                    name="date" 
                    onChange={onChange}
                    value={task.date}
                    placeholder="Dato"
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