import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {catActions} from "../redux";

const CatsForm = () => {

    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const {catForUpdate} = useSelector(({cats}) => cats );

    const save = () => {
        if(catForUpdate){
            dispatch(catActions.updateCat({name, id: catForUpdate.id}))
        } else {
        dispatch(catActions.addCat({name}));
        }
        setName('')
    };

    useEffect(() => {
        if(catForUpdate){
            setName(catForUpdate.name)
        }
    }, [catForUpdate])

    return (
        <div>
            <label>Cat name:
                <input type="text"
                onChange={(e) => {
                    setName(e.target.value)
                }}
                       value={name}/>
            </label>
            <button onClick={save}>{catForUpdate? "Update" : "Save"}</button>

        </div>
    );
};

export {CatsForm};
