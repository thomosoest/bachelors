import React ,{useContext}  from 'react';
import TaskContext from '../../context/task/taskContext';


const TaskCard = ({title, text, date, status, click, buttonName, children, id, arg }) => {
    const taskContext = useContext(TaskContext);
    const {updateTaskStatus} = taskContext;
    
    let newStatus;


    const onSubmitHandler = (e) => {
        e.preventDefault();
        updateTaskStatus(id,newStatus);

        console.log(id,newStatus);
    }

    const clickHandler = () => {
        if (click)
            if(arg) 
                click(arg);
            else click();
    }

    return (
        <div className="card bg-light half rounded">
        <h3>{title}</h3>
        <p>{text}</p>
        <h5>{date}</h5>
        <h5>{status}</h5>
        <form onSubmit={onSubmitHandler}>
                <input 
                    type="text" 
                    name="newStatus"
                    value={newStatus}
                    placeholder="Ny Status?"
                />
                <input type="submit" value="Oppdater Status" className="btn btn-dark btn-sm"
                />
            </form> 
        <button onClick={clickHandler} className="btn btn-dark btn-sm">{buttonName}</button>
        {children}
       
        </div>
        
    )
}

export default TaskCard;