import React from 'react';


const ProfileLink = props => {

    const click = () => {
        const url = `http://localhost:3000/profile/${props.user._id}`;
        window.open(url, '_blank');
    }

    return (
        <div>
            <p onClick={click}>{props.user.name}</p>
        </div>
    );
}

export default ProfileLink;