import React, {useEffect, useState} from 'react';
import {userService} from "../../services";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(value => value.data).then(value => console.log(value))
    }, [])
    return (
        <div></div>
    );
}

export {Users};
