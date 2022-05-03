import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dogActions} from "../redux";

const DogsForm = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();
    const {dogForUpdate} = useSelector(state => state.dogs);

    const save = () => {
        if (dogForUpdate) {
            dispatch(dogActions.updateDog({name: nameInput.current.value, id: dogForUpdate.id}))
        } else {

            dispatch(dogActions.addDog({name: nameInput.current.value}));
        }
        nameInput.current.value = ''
    }

    useEffect(() => {
        if (dogForUpdate) {
            nameInput.current.value = dogForUpdate.name
        }
    }, [dogForUpdate])


    return (
        <div>
            <label>Dog name: <input type="text" ref={nameInput}/></label>
            <button onClick={save}>{dogForUpdate? 'Update' : "Save"}</button>
        </div>
    );
};

export {DogsForm};
