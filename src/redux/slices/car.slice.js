import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null // статус загрузки, записуємо всюди
}
const getAll = createAsyncThunk(
    'getAllCars',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const create = createAsyncThunk(
    'create',
    async ({car}) => {
        const {data} = await carService.create(car);
        return data

    } // в параметри можна передати лише один аргумент, тому
    // кладемо об"єкт
);
const carSlice = createSlice({
        name: 'carSlice',
        initialState,
        reducers: {},
        extraReducers: {
            [getAll.pending]: (state, action) => {
                state.status = 'loading...'
            },
            [getAll.fulfilled]: (state, action) => {
                state.status = 'completed'
                state.cars = action.payload;
            },
            [getAll.rejected]: (state, action) => {
                state.status = 'rejected'

            },
            [create.fulfilled]: (state, action) => {
                state.cars.push(action.payload)
            },
            [create.rejected]: (state, action) => {
                console.log('error');
            },

        }

    }
);

const {reducer: carReducer, actions: {}} = carSlice;

const carActions = {
    getAll,
    create
} //ці екшени з extraReducers

export {
    carReducer,
    carActions
}

//pending - коли дані в процесі запиту;
//fulfilled - коли дані загрузилися коректно;
//rejected - коли дані не загрузилися коректно;

//мають бути в [], бо це динамічна змінна
