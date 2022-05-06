import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: 'Max'
}

const secondSlice = createSlice({
    name: "secondSlice",
    initialState,
});

export const {reducer: secondReducer} = secondSlice
