import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import TaskCard from '../UI/TaskCard';

const TaskItemManager = (props) => {

    return (
   <TaskCard 
                    title={props.task.taskName}
                    text={"Beskrivelse: " + props.task.description}
                    arg={{name: props.task.taskName, id: props.task._id}}
                    buttonName={props.buttonName}
                    click={props.click}
                />
    )
};

export default TaskItemManager;