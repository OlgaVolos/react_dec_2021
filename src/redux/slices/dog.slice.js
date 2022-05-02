import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: []
}

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {name} = action.payload;
            const newDog = {id: new Date().getTime(), name};
            state.dogs.push(newDog)
        },
        deleteDog: (state, action) => {
            const index = state.dogs.findIndex(value => value.id === action.payload.id);
            state.dogs.splice(index, 1);

        }
    }

});

const {reducer: dogReducer, actions: {addDog, deleteDog}} = dogSlice;
export default dogReducer;

export const dogActions = {
    addDog, deleteDog
}
