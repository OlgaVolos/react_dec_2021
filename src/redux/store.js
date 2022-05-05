
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer, secondReducer} from "./slices";

const rootReducer = combineReducers({
cars: carReducer,
    second: secondReducer
});

const store = configureStore({
reducer: rootReducer
});

export default store;


