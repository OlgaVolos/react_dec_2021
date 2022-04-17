import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../../components";
import {Outlet} from "react-router-dom";

const UserPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data))
    },[])

    return (
        <div style={{display: "flex"}}>
            <div >
            {users.map(user=> <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserPage};
