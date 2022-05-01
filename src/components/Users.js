import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "../redux/actions";

const Users = () => {

 const userState = useSelector(state => state.usersState);
 const dispatch = useDispatch();


 useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json())
         .then(users => {
         loadUsers(users, dispatch)

         }
         )
 }, [])

 return (
        <div>
            {userState.map(value =>
                <div key={value.id}>{value.id} -- {value.name} </div>
            )}
        </div>
    );
};

export {Users};
//loadUsers(users, dispatch) dispatch не як виклик функції, а просто як аргумент
