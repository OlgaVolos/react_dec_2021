import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../User/User";

function Users({getSingle}) {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);


    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data))
    }, [])

    const getUserId = async (id) => {
        const {data} = await userService.getUserById(id);
        setUser(data)
    }
    return (
        <div>
            <div>
                {users.map((user) => <User key={user.id} user={user} getUserId={getUserId} getSingle={getSingle}/>)}
            </div>
            {user && <div>{user.name} *** {user.email}</div>}
        </div>
    );
}

export {Users};
