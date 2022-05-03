import React from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../redux";

const Cat = ({cat}) => {
    const dispatch = useDispatch();

    const deleteCat = () => {
        dispatch(catActions.deleteCat({id: cat.id}))
    }
    const setToUpdate = () => {
        dispatch(catActions.setCatForUpdate({cat}))
    }

    return (
        <div>
            {cat.name}
            <button onClick={setToUpdate}>Update</button>
            <button onClick={deleteCat}>Delete</button>
        </div>
    );
};

export {Cat};
