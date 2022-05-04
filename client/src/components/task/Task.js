import React, {Fragment, useContext, useEffect, useState} from 'react';
import TaskContext from '../../context/task/taskContext';
import TaskItem from '../../components/task/TaskItem';
import CompanyContext from '../../context/company/companyContext';
import ProfileContext from '../../context/profile/profileContext';
import ProfileLink from '../profile/ProfileLink';
import Card from '../UI/CardSmall';

const Tasks = (props) => { 
    const taskContext = useContext(TaskContext);
    const companyContext = useContext(CompanyContext);
    const {tasks, getCompanyTasks} = taskContext;
    const profileContext = useContext(ProfileContext);

    const [selected, setSelected] = useState([]);  // For when the owner assigns tasks to selected employees
    const [selectedTask, setSelectedTask] = useState(null);


    const addSelected = user => {
        for(let i = 0; i< selected.length; i++)
            if(selected[i].id === user.id)
                return;

            setSelected([...selected, user]);
    }


    const updateSelectedTask = task => {
        console.log(task);
        setSelectedTask(task);
    }


    const assertTask = () => {
        let employeeNames = selected.map(a => a.name);
        let employeeIDs = selected.map(a => a.id);
        if(selected.length > 0 && selectedTask !== null){
            taskContext.addEmployee(selectedTask.id, employeeNames);
            profileContext.sendTask(selectedTask.id, employeeIDs)
        }
    }


    useEffect(() => {
        if(companyContext.currentCompany !== null)getCompanyTasks(companyContext.currentCompany._id);
        // eslint-disable-next-line
    }, [companyContext.currentCompany]); 

    return (  
        <Fragment>
            <div>
                <h1 className="text-left">Oppgaver: </h1>
                <div className="flex-container">
                {(tasks.length > 0)? 
                    (tasks.map(task => (
                            <TaskItem 
                            key={task._id} 
                            case={props.case} 
                            task={task} 
                            click={props.click}
                            buttonName={props.buttonName}
                            />
                )
                )) : (null)} 
                </div>
                <h3 className="text-left">Ansatte: </h3>
                {companyContext.currentCompany != null ?
                companyContext.currentCompany.ansatte.map(user => (
                    <div key={user.user._id}>
                        <Card 
                            title={user.user.name} 
                            click={addSelected}
                            buttonName="Legg til liste"
                            arg={{name: user.user.name, id: user.user._id}}
                        >
                        </Card>
                    </div>
                )) : null
                }

                <div className="card half">
                {selected.length > 0 ?
                selected.map(user => (
                <div key={user.id}>  
                    <p>Navn: {user.name} </p>
                </div>
                    )
                    ) : <h4>Ingen valgte personer</h4>

                }
            </div>
            <button onClick={assertTask}>Gi Oppgave</button>
            </div>
        </Fragment>
    );
}

export default Tasks;