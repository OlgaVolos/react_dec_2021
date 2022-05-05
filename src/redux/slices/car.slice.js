import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null, // статус загрузки, записуємо всюди
    formErrors: {} // щоб витягувати помилки
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
    async ({car}, {getState, dispatch, rejectWithValue}) => {
        try {

            const store = getState(); // повертає глобальний стор
            // якщо в store в rootReducer в нас є декілька, то деструктуруємо той, який нам треба
            // const {cars} = getState()
            console.log(store);
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
const carSlice = createSlice({
        name: 'carSlice',
        initialState,
        reducers: {
            create: ((state, action) => {
                state.cars.push(action.payload.car)
            })
        },

        // extraReducers: {
        //     [getAll.pending]: (state, action) => {
        //         state.status = 'loading...'
        //     },
        //     [getAll.fulfilled]: (state, action) => {
        //         state.status = 'completed'
        //         state.cars = action.payload;
        //     },
        //     [getAll.rejected]: (state, action) => {
        //         state.status = 'rejected'
        //
        //     },
        //     [createAsync.fulfilled]: (state, action) => {
        //         // state.cars.push(action.payload); //якщо робимо в reducers, то тут не треба
        //         state.status = 'completed'
        //     },
        //     [createAsync.rejected]: (state, action) => {
        //         const {status, formErrors} = action.payload;
        //         state.status = status;
        //         state.formErrors = formErrors;
        //     },
        //
        // }
        extraReducers: (builder) => {
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.status = 'completed'
                    state.cars = action.payload;
                    console.log(action.payload);
                })
                .addCase(createAsync.fulfilled, (state, action) => {
                    state.status = 'completed';
                    console.log(action.payload);
                })
                .addCase(createAsync.rejected, (state, action) => {
                    const {status, formErrors} = action.payload;
                    state.status = status;
                    state.formErrors = formErrors;
                    console.log(action.payload);
                    // це просто інший запис extraReducers, еквівалентний попередньому
                })
        }

    }
);

const {reducer: carReducer, actions: {create}} = carSlice;

const carActions = {
    getAll,
    createAsync,
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
