import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const submit = async (newCar) => {
        await dispatch(carActions.create({car: newCar}))
        reset()

    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label>model: <input type="text" {...register('model')}/></label>
            </div>
            <div>
                <label>price: <input type="text" {...register('price')}/></label>
            </div>
            <div>
                <label>year: <input type="text" {...register('year')}/></label>
            </div>
            <button>Save</button>
        </form>
    );
};

export {CarForm};
