import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../redux";

const CatsForm = () => {

    const {name, setName} = useState('');
    const dispatch = useDispatch();

    const save = () => {
        dispatch(catActions.addCat({name}));
        // setName('')
    }

    return (
        <div>
            <label>Cat name:
                <input type="text"
                // onChange={(e) => {
                //     setName(e.target.value)
                // }}
                       value={name}/>
            </label>
            <button onClick={save}>Save</button>

        </div>
    );
};

export {CatsForm};
