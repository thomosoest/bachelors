import React, {Fragment, useContext, useEffect} from 'react';
import TaskContext from '../../context/task/taskContext';
import TaskItem from '../../components/task/TaskItem';
import CompanyContext from '../../context/company/companyContext';

const Tasks = (props) => { 
    const taskContext = useContext(TaskContext);
    const companyContext = useContext(CompanyContext);
    const {tasks, getCompanyTasks} = taskContext;
     
    useEffect(() => {
        if(companyContext.currentCompany !== null)getCompanyTasks(companyContext.currentCompany._id);
        // eslint-disable-next-line
    }, [companyContext.currentCompany]); 

    return (   
        <Fragment>
            {tasks.map(task => (
            <TaskItem key={task._id} case={props.case} task={task}/>
            ))} 
        </Fragment>
    );
}

export default Tasks;