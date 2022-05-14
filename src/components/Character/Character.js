import React from 'react';

import css from './Character.module.css'

const Character = ({character: {name, status, species, image}}) => {
    return (
        <div className={css.character}>
            <div>{name}</div>
            <div>{status}</div>
            <div>{species}</div>
            <img src={image} alt={name}/>

        </div>
    );
};

export {Character};
