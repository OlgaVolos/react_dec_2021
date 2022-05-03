import React from 'react';
import {useDispatch} from "react-redux";
import {dogActions} from "../redux";

const Dog = ({dog}) => {

    const dispatch = useDispatch();


    return (
        <div>
            {dog.name}
            <button onClick={() => dispatch(dogActions.setDogForUpdate({dog}))}>Update</button>
            <button onClick={() => dispatch(dogActions.deleteDog({id: dog.id}))}>Delete</button>
        </div>
    );
};

export {Dog};
