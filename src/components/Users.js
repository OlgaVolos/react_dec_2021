import React, {useEffect, useState} from 'react';
import {userService} from "../services";
import User from "./User";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(value => setUsers(value))
    }, [])

    return (
        <div>
            {
                users.map((user)=> <User key={user.id} user={user}/>)
            }
        </div>
    );
}

export {Users};
