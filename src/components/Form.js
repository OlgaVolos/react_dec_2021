import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux";

const Form = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={() => dispatch(userActions.addUser({user: nameInput.current.value}))}>Save</button>
        </div>
    );
};

export {Form};
