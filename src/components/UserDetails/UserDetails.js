import React from 'react';
import {Button} from "../Button/Button";

const UserDetails = ({user}) => {

    const {id, name, username, email} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email : {email}</div>
            <button>User's posts</button>
        </div>
    );
};

export {UserDetails};
