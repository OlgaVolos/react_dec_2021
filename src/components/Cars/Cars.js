import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);
    const [deletedCar, setDeletedCar] = useState(null);

    useEffect(() => {

        carService.getAll().then(({data}) => setCars(data))

    }, [newCar, deletedCar, updatedCar]);

    // useEffect(() => {
    // if(newCar) {
    //     setCars([...cars, newCar])
    // }
    // },[newCar]);

    // useEffect(() => {
    //     if(newCar) {
    //         setCars(prevState => [...prevState, newCar])
    //     }
    // },[newCar]) //теж саме, що й попередній
    // useEffect(() => {
    //     if(deletedCar) {
    //         setCars(cars.filter(car=> car.id !== deletedCar))
    //     }
    // },[deletedCar]);

    // useEffect(() => {
    //     if(newCar) {
    //         setCars([...cars, newCar])
    //     }
    //     if(deletedCar) {
    //         setCars(cars.filter(car=> car.id !== deletedCar))
    //     }
    //     if(updatedCar){
    //         const car = cars.find(car => car.id===updatedCar.id );
    //         Object.assign(car, updatedCar)
    //         setCars([...cars])
    //
    //     }
    // },[newCar, deletedCar, updatedCar]);

    // можна об"єднати два useEffect і вказати дві залежності,
    // можна в перший useEffect додати залежності і тоді все буде
    // загружатися спочатку. В даному випадку, це найкращий результат.
    // те ж саме з оновленням. Якщо вказати всі залежності в перший Юзефект,
    // завжди буде робитися запит. В іншому випадку, ми робили новий юзстейт
    // і прокидали далі і показували це без ще одного запиту

    return (
        <div>
            {cars.map(car => <Car key={car.id}
                                  car={car}
                                  setCarForUpdate={setCarForUpdate}
                                  setDeletedCar={setDeletedCar}/>)}

        </div>
    );
};

export {Cars};
