import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";
import {useNavigate} from "react-router-dom";

const Car = ({car, car: {id, price, model, year}}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteById = async () => {
        await dispatch(carActions.deleteCar({id}))
        navigate('/')

    };

    const setCarForUpdate = () => {
        dispatch(carActions.setCarForUpdate({car}))
        console.log({car})
    }

    return (
        <div>
            {id})-- {model}--{price}--{year}
            <div>
                <button onClick={setCarForUpdate}>Update</button>
                <button onClick={deleteById}>Delete</button>
            </div>
        </div>
    );
};

export {Car};
