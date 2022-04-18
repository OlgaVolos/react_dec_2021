import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {

    const {userId} = useParams();
    const {state} = useLocation()

    const [user, setUser] = useState(null);

    useEffect(() => {
        if(!state){
            userService.getUserById(userId).then(({data}) => setUser(data) )
        } else {
            setUser(state)
        }
    },[userId, state])

    return (
        <div>
        <div>
            {user && <UserDetails user={user}/>}
        </div>
            <div><Outlet/></div>
        </div>
    );
};

export {SingleUserPage};
