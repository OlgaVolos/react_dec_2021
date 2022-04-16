import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar,carForUpdate, setUpdatedCar, setCarForUpdate}) => {
    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'onTouched'
    });
    //handlerSubmit автоматично робить preventDefault, це функція, тому і передаємо йому функцію, яка буде відловлювати нашу інфу
    // joiResolver підключає валідатор
    // mode диктує умови, при яких валідатор спрацює
    // setValue вміє сетати нашу інформацію в форму для редагування
    // const [formError, setFormError] = useState({});

    useEffect(() => {
        if(carForUpdate){
            const {model, price, year} = carForUpdate
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    },[carForUpdate])


    const submit = async (car) => {
        try {
            if(carForUpdate){
                const {data} = await carService.updateById(carForUpdate.id, car);
                setUpdatedCar(data);
                setCarForUpdate(false)

            } else{
            const {data} = await carService.create(car);
            setNewCar(data);

            }

            reset();
        } catch (e) {
            // setFormError(e.response.data);

        }
    }
// маємо помилку в тому, що форма завжди працює на оновлення машини. Щоб цього уникнути
    const clearForm = () => {
        setCarForUpdate(false) // форма не буде мати в собі оновлення
        reset()

    }

    // з Апп тягнемо дані.
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register("model")} /></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><label>Price: <input type="text" {...register("price")} /></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><label>Year: <input type="text" {...register("year")}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            {/*<div><label>Year: <input type="text" {...register("year.month")}/></label></div>*/}
            <button disabled={!isValid}>{carForUpdate? 'Update' : "Create"}</button>
            {
                !!carForUpdate && <button onClick={clearForm}>Clear</button>
            }

        </form>
    );
};

export {CarForm};
