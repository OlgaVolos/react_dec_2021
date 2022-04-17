import React from 'react';

import css from './Button.module.css'
import {Link} from "react-router-dom";

const Button = ({to, state, children, ...agr}) => {
    return (
        <Link to={to} state={state} replace >
            <button className={css.button} {...agr}>{children}</button>
        </Link>
    );
};

export {Button};
 // ...agr можливо ми ще щось будемо передавати
// replace
