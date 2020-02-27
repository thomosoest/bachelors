import React from 'react';

const Backdrop = (props) => {
    if(props.show) return <div className='Backdrop' onClick={props.clicked}></div>
    return null;
}

export default Backdrop;