import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../User/User";

const Users = ({setUser, setUserIdForPosts}) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            {users ?
                users.map(user => <User key={user.id}
                                     user={user}
                                     setUser={setUser}
                                        setUserIdForPosts={setUserIdForPosts}/>)
        : "Loading..."}
        </div>
    );
};

export {Users};
