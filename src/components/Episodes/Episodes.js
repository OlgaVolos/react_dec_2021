import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Episode} from "../Episode/Episode";
import {episodeActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

import css from './Episodes.module.css'


const Episodes = () => {
    const {episodes, prev, next} = useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams({page: "1"});
    const dispatch = useDispatch();

    const nextPage = () => {
      const nextPage = +query.get('page')+1;
      setQuery({page: `${nextPage}`})
    };

    const prevPage = () => {
        const prevPage = +query.get('page')-1;
        setQuery({page: `${prevPage}`})
    }

    useEffect(() => {
        dispatch(episodeActions.getAll({page: query.get('page')}))
    }, [query])
    return (
        <div>
            <div className={css.episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}

            </div>
            <div className={css.episodes_btn}>
                <button disabled={!prev} onClick={prevPage}>prev</button>
                <button disabled={!next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};
