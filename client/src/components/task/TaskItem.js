import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../UI/Card';

const TaskItem = (props) => {

    let output = null;
    switch (props.case ) {
        case "owner":
                output = <Card 
                    title={props.task.taskName}
                    text={"Beskrivelse: " + props.task.description}
                    arg={{name: props.task.taskName, id: props.task._id}}
                    buttonName={props.buttonName}
                    click={props.click}
                />
            break;
        case "ansatt":  
                output = <Card 
                    title={props.task.taskName}
                    text={"Employee Beskrivelse: " + props.task.description}
                />      
            break;
    
        default: 
                output = <Card 
                    title={props.task.taskName}
                    text={"Beskrivelse: " + props.task.description}
                />
            break;
    }

    return (
        output
    )
};

export default TaskItem;