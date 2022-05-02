import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dogReducer from "./slices/dog.slice";
import catReducer from "./slices/cat.slice";

const rootReducer = combineReducers({
   dogs: dogReducer,
   cats: catReducer
})

const store = configureStore({
    reducer: rootReducer
});

export default store
