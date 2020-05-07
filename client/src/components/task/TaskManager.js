import React, {Fragment, useContext, useEffect} from 'react';
import TaskContext from '../../context/task/taskContext';
import TaskManagerItem from '../../components/task/TaskManagerItem';

const TaskManager = (props) => { 
    const taskContext = useContext(TaskContext);
    const {tasks, getUserTasks} = taskContext;



    useEffect(() => {
        if(props !== null)getUserTasks("Mozart");
        // eslint-disable-next-line
    }, [] ); 

/* 
useEffect(() => {
    if(props !== null) props.id.map((task) => getUserTasks(task))
    // eslint-disable-next-line
}, [] ); 
*/
    return (  
        <Fragment>
        <h1 className="text-left">Oppgaver: </h1>
        <div className="flex-container">
        {(tasks.length > 0)? 
            (tasks.map(task => (
                <TaskManagerItem
                key={task._id}
                case={props.case}
                task={task}
                click={props.click}
                />
            )
        )) : (null)} 
        </div>
    </Fragment>
    );
}

export default TaskManager;