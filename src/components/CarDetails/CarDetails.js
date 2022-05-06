import React from 'react';
import {carActions} from "../../redux";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const CarDetails = ({car, car: {id, model, price, year}}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const deleteById = async () => {
      await  dispatch(carActions.deleteCarAsync({id}));
      navigate('/cars')
    }

    return (
        <div>
            <h3>id: {id}</h3>
            <h3>model: {model}</h3>
            <h3>price: {price}</h3>
            <h3>year: {year}</h3>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car})) }>Update</button>
            <button onClick={deleteById}>Delete</button>

        </div>
    );
};

export {CarDetails};
