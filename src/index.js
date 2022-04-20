import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./hoc";

// export const MyContext = createContext(null);

const value = {name: "Max", age: 15}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <MyContext.Provider value={value}>
    <AuthProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AuthProvider>
    // {/*</MyContext.Provider>*/}
)


// <BrowserRouter>
//             <App/>
// </BrowserRouter> це є чілдреном AuthProvider


