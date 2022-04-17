import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postService} from "../../services";
import {PostDetail} from "../../components";


const SinglePostPage = () => {
    const {id} = useParams();
    const {state} = useLocation();

    const [post, setPost] = useState(state);

    // useEffect(() => {
    //     postService.getById(id).then(({data}) => setPost(data) )
    // },[id])

    useEffect(() => {
        if(!state){
        postService.getById(id).then(({data}) => setPost(data) )

        } else {}
        setPost(state)

    },[id, state])

    return (
        <div>
            {post && <PostDetail post={post}/>}
        </div>
    );
};

export {SinglePostPage};

// const {id} = useParams(); буде називатися саме так, як ми назвали в дочірній урлі
//useParams - хук, який допомагає нам передавати інформацію з урли
// const {state} = useLocation(); хук, який витягає інформацію з урли
// перехід відбувається лише по лінці, якщо прописати примусово руцями, то треба робити запит на сервер
// щоб скомбінувати, треба в ЮзСтейт замість нал прописати стейт
// і в useEffect робити перевірку та додати в залежності state
