import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer, carReducer} from "./slices";

const rootReducer = combineReducers({
    auth: authReducer,
    cars: carReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
}
