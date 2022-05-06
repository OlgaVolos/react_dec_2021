import React from 'react';
import {Link} from "react-router-dom";

const Car = ({car, car: {id, model}}) => {
    return (
        <div>
            {id} - {model}
            <Link to={id.toString()} state={car}>
            <button>Details</button>
            </Link>

        </div>
    );
};

export {Car};
