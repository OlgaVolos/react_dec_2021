import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {characterService} from "../../services";
import {Character} from "../Character/Character";

import css from './Characters.module.css'

const Characters = () => {
    const {state} = useLocation();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterService.getByCharacterList(state).then(({data})=>setCharacters(data))
    },[])

    return (
        <div className={css.characters}>
            {characters.map(item=> <Character key={item.id} character={item}/>)}
        </div>
    );
};

export {Characters};
