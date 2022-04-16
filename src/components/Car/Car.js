import React from 'react';
import {carService} from "../../services";

const Car = ({car, setCarForUpdate, setDeletedCar}) => {
    const {id, model, price, year} = car;

    const deleteByID = async () => {
        await carService.deleteById(id);
        setDeletedCar(id);
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>deleteByID()}>Delete car</button>
            <button onClick={()=>setCarForUpdate(car)}>Update car</button>
            <br/>

        </div>
    );
};

export {Car};
