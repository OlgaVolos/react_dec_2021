import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null, // статус загрузки, записуємо всюди
    formErrors: {}, // щоб витягувати помилки
    carForUpdate: null
}
const getAll = createAsyncThunk(
    'getAllCars',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const createAsync = createAsyncThunk(
    'create',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            dispatch(create({car: data}))
            // return data // якщо робимо в reducers, то повертати data не треба, але біля
            // rejectWithValue викликаємо  dispatch
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }

    } // в параметри можна передати лише один аргумент, тому
    // кладемо об"єкт
);

const deleteCarAsync = createAsyncThunk(
    'deleteCarById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id); //після видалення, ми хочемо щось робити і робимо в діспатчі
            dispatch(deleteCarById({id}))  // беремо зі звичайних редюсерів знизу

        } catch (e) {
            return rejectWithValue({status: e.message})
        }

    }
);

const updateCarAsync = createAsyncThunk(
    'updateById',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(id, car);
            dispatch(updateCarById({id, car}))
        } catch (e) {
            return rejectWithValue({status: e.message})

        }
    }
);


const carSlice = createSlice({
        name: 'carSlice',
        initialState,
        reducers: {
            create: (state, action) => {
                state.cars.push(action.payload.car)
            },
            deleteCarById: (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload.id);
                state.cars.splice(index, 1)
            },
            updateCarById: (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload.id);
                state.cars[index] = {...state.cars[index], ...action.payload.car};
                state.carForUpdate = false; // для того, щоб очищалася форма

            },
            setCarForUpdate: (state, action) => {
                state.carForUpdate = action.payload.car
            },
        },
        extraReducers: {
            [getAll.pending]: (state) => {
                state.status = 'loading...'
            },
            [getAll.fulfilled]: (state, action) => {
                state.status = 'completed'
                state.cars = action.payload;
            },
            [getAll.rejected]: (state) => {
                state.status = 'rejected'

            },
            [createAsync.fulfilled]: (state) => {
                // state.cars.push(action.payload); //якщо робимо в reducers, то тут не треба
                state.status = 'completed'
            },
            [createAsync.rejected]: (state, action) => {
                const {status, formErrors} = action.payload;
                state.status = status;
                state.formErrors = formErrors;
            },

        }

    }
);

const {reducer: carReducer, actions: {create, deleteCarById, updateCarById, setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    createAsync,
    deleteCarAsync,
    updateCarAsync,
    setCarForUpdate

} //ці екшени з extraReducers і решта, які ви витягуємо назовні.
//якщо ми ними користуємося лише тут, то не треба експортувати

export {
    carReducer,
    carActions,
}

//pending - коли дані в процесі запиту;
//fulfilled - коли дані загрузилися коректно;
//rejected - коли дані не загрузилися коректно;

//мають бути в [], бо це динамічна змінна
