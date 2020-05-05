import React, {Fragment, useContext, useEffect} from 'react';
import TaskContext from '../../context/task/taskContext';
import TaskItem from '../../components/task/TaskItem';
//import CompanyContext from '../../context/company/companyContext';

const ManageTasks = (props) => { 
    const taskContext = useContext(TaskContext);
    //const companyContext = useContext(CompanyContext);
    const {tasks, getUserTasks} = taskContext;
     

    useEffect(() => {
        if(props !== null)getUserTasks(props);
        // eslint-disable-next-line
    }, [] ); 

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
                    click={props.click}
                    buttonName={props.buttonName} 
                    />
        )
       )) : (null)} 
        </div>
   
    </Fragment>
    );
}

export default ManageTasks;