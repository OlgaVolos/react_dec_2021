import React from 'react';

import css from './Episode.module.css'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {episodeActions} from "../../redux";

const Episode = ({episode: {name, air_date, episode, characters}}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toCharacters = () => {
        dispatch(episodeActions.currentEpisode({episodeName: name}))
        navigate('/characters', {state:characters})

    }
    return (
        <div className={css.episode}
             onClick={toCharacters}>
            <div><h3>{name}</h3></div>
            <div><p>{air_date}</p></div>
            <div><p>{episode}</p></div>
        </div>
    );
};

export {Episode};
