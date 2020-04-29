import React from 'react';
import Card from '../UI/Card';

const CourseItem = (props) => {

    let output = null;
    switch (props.case ) {
        case "owner":
                output = <Card 
                    title={props.course.name}
                    arg={{name: props.course.name, id: props.course._id}}
                    click={props.click}
                    buttonName={props.buttonName}
                    text={"Owner Beskrivelse: " + props.course.description}
                />
            break;
        case "ansatt":  
                output = <Card 
                    title={props.course.name}
                    text={"Employee Beskrivelse: " + props.course.description}
                />      
            break;
    
        default: 
                output = <Card 
                    title={props.course.name}
                    text={"Beskrivelse: " + props.course.description}
                />
            break;
    }

    return (
        output
    )
};

export default CourseItem;