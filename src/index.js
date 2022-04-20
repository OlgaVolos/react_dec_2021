import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export const MyContext = createContext(null);

const value = {name: "Max", age: 15}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyContext.Provider value={value}>
        <BrowserRouter>
        <App/>
    </BrowserRouter>
    </MyContext.Provider>
)



