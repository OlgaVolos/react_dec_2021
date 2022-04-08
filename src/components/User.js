import React from 'react';

function User({user}) {
    const {id, name, username} = user
    return (
        <div>
            <span>{id}</span>
            <span>{name}</span>
            <span>{username}</span>
            <hr/>
        </div>
    );
}

export default User;
