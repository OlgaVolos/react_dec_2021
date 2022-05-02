import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux";

const User = ({user: {id, name}}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {id} --- {name}
            <button onClick={() => dispatch(userActions.deleteUser({id}))}>Delete</button>
        </div>
    );
};

export {User};
