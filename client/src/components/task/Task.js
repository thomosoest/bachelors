import React, {Fragment, useContext, useEffect} from 'react';
import TaskContext from '../../context/task/taskContext';
import TaskItem from '../../components/task/TaskItem';
import CompanyContext from '../../context/company/companyContext';

const Tasks = (props) => { 
    const taskContext = useContext(TaskContext);
    const companyContext = useContext(CompanyContext);
    const {tasks, getCompanyTasks, deleteTask} = taskContext;
     
    useEffect(() => {
        if(companyContext.currentCompany !== null)getCompanyTasks(companyContext.currentCompany._id);
        // eslint-disable-next-line
    }, [companyContext.currentCompany]); 

    const onClickDelete = (props) => {

        //!NB  Burde være en "Er du sikker på at du vil slette", box her
        //console.log(props.id);
        deleteTask(props.id);

    }


    return (  
        <Fragment>
            <h1 className="text-left">Oppgaver: </h1>
            <div className="flex-container">
            {(tasks.length > 0)? 
                (tasks.map(task => (
                        <TaskItem 
                        key={task._id} 
                        case={props.case} 
                        task={task} 
                        click={onClickDelete}
                        buttonName={"Slett Oppgave"}
                        />
            )
           )) : (null)} 
            </div>
       
        </Fragment>
    );
}

export default Tasks;