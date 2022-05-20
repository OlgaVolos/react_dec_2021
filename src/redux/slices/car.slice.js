import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    status: null,
    carFormErrors: {}
};

const getAllCars = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const createCar = createAsyncThunk(
    'carSlice/create',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.createCar(car);
            dispatch(create({car: data}))
        } catch (e) {
            return rejectWithValue({status: e.message, carFormErrors: e.response.data})
        }
    }
);


const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteCar(id);
            dispatch(deleteCarById({id}))

        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);

const updateCarById = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateCarById(id, car);
            dispatch(updateCar({id, car}));
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
                const index = state.cars.findIndex(car => car.id === action.payload);
                state.cars.splice(index, 1)
            },
            setCarForUpdate: (state, action) => {
                state.carForUpdate = action.payload.car
            },
            updateCar: (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload.car);
                state.cars[index] = {...state.cars[index], ...action.payload.car};
                state.carForUpdate = false
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(getAllCars.fulfilled, (state, action) => {
                    state.cars = action.payload
                })
                .addCase(createCar.fulfilled, (state) => {
                    state.status = 'completed'
                })
        }
    }
);

const {reducer: carReducer, actions: {create, deleteCarById, setCarForUpdate, updateCar}} = carSlice;

const carActions = {
    getAllCars,
    createCar,
    deleteCar,
    updateCarById,
    setCarForUpdate

}

export {
    carReducer,
    carActions
}
