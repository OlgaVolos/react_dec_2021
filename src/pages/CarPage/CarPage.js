import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {CarDetails} from "../../components";
import {carService} from "../../services";

const CarPage = () => {
    const [car, setCar] = useState(null)
    const {state} = useLocation(); //витягаємо стейт з урли
    const {carId} = useParams() // витягаємо параметр з урли в App.js


    useEffect(() => {
        if (state) {
            setCar(state)
        } else {
            carService.getById(carId).then(({data}) => setCar(data))
        }
    }, [])

    return (
        <div>
            {
                car && <CarDetails car={car}/>
            }

        </div>
    );
};

export {CarPage};
