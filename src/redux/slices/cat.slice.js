import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: []
}

const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        addCat: (state, action) => {
            const {name} = action.payload;
            const newCat = {id: new Date().getTime(), name};
            state.cats.push(newCat);
        },
        deleteCat: (state, action) => {
            const {id} = action.payload;
            const index = state.cats.findIndex(cat=> cat.id === id);
            state.cats.splice(index, 1);
        },


    }

});

const {reducer: catReducer, actions: {addCat, deleteCat}} = catSlice;

export default catReducer;

export const catActions = {
    addCat, deleteCat
}
