import React from 'react';

const ProfileLink = props => {

    const click = () => {
        const url = `http://localhost:3000/profile/${props.user._id}`;
        window.open(url, '_blank');
    }

    return (
        <div onClick={click}>
            {props.children}
        </div>
    );
}

export default ProfileLink;