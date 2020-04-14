import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../UI/Card';

const TaskItem = (props) => {

    let output = null;
    switch (props.case ) {
        case "owner":
                output = <Card 
                    title={props.task.taskName}
                    text={"Eier Beskrivelse: " + props.task.description}
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