import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useNavigate} from "react-router-dom";

const CarForm = () => {
    const {carFormErrors, carForUpdate} = useSelector(state =>
        state.cars
    );
    const {register, reset, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carForUpdate])

    const submit = async (newCar) => {
        if (carForUpdate) {
            await dispatch(carActions.updateCarById({id: carForUpdate.id, car: newCar}))
        } else {
            await dispatch(carActions.createCar({car: newCar}));
        }
        navigate('/')
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><input type="text" placeholder={'model'} {...register('model')}/>
                {carFormErrors.model && <span>{carFormErrors.model[0]}</span>}
            </div>
            <div><input type="text" placeholder={'price'} {...register('price')}/>
                {carFormErrors.price && <span>{carFormErrors.price[0]}</span>}
            </div>
            <div><input type="text" placeholder={'year'} {...register('year')}/>
                {carFormErrors.year && <span>{carFormErrors.year[0]}</span>}
            </div>
            <button>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {CarForm};
