import React, {useContext} from 'react';
//import CourseContext from '../../context/courses/courseContext';
import { useHistory } from 'react-router-dom';
import Card from '../UI/Card';

const CourseItem = (props) => {

    let output = null;
    switch (props.case ) {
        case "owner":
                output = <Card 
                    title={props.course.name}
                    text={"Beskrivelse: " + props.course.description}
                />
            break;
        case "ansatt":  
                output = <Card 
                    title={props.course.name}
                    text={"Beskrivelse: " + props.course.description}
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