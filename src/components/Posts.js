import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Posts = () => {
    const postsSelector = useSelector(({postsState}) => postsState);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type: "LOAD_POSTS", payload: value})
            })
    }, [])
    return (
        <div>
            {
                postsSelector.map(value=> <div key={value.id}>{value.id} -- {value.title} </div>)
            }
        </div>
    );
};

export {Posts};
//dispatch(loadPosts(value)) замінюємо, якщо все розкинули по своїх папках
