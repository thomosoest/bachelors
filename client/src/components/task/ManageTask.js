import React, {Fragment, useContext, useEffect} from 'react';
import TaskContext from '../../context/task/taskContext';
import TaskItem from '../../components/task/TaskItem';
import CompanyContext from '../../context/company/companyContext';

const ManageTasks = (props) => { 
    const taskContext = useContext(TaskContext);
    const companyContext = useContext(CompanyContext);
    const {tasks, getUserTasks} = taskContext;
     

    useEffect(() => {
        if(companyContext.currentCompany !== null)getUserTasks(companyContext.currentCompany._id);
        // eslint-disable-next-line
    }, [companyContext.currentCompany]); 

    

    return (  
        <Fragment>
            <h2>Oppgaver: </h2>
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
       
       
        </Fragment>
    );
}

export default ManageTasks;