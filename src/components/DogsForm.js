import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {dogActions} from "../redux";

const DogsForm = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();
    const save = () => {
      dispatch(dogActions.addDog({name: nameInput.current.value}));
      nameInput.current.value = ''
    }

    return (
        <div>
            <label>Dog name: <input type="text" ref={nameInput}/></label>
            <button onClick={save}>Save</button>
        </div>
    );
};

export {DogsForm};
