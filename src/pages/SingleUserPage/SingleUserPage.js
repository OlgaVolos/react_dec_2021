import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {

    const {id} = useParams();
    const {state} = useLocation()

    const [user, setUser] = useState(null);

    useEffect(() => {
        if(state){
            userService.getUserById(id).then(({data}) => setUser(data) )
        } else {
            setUser(state)
        }
    },[id, state])

    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export {SingleUserPage};
