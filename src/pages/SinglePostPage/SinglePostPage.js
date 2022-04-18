import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {postService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {id} = useParams();
    const {state} = useLocation()


    const [post, setPost] = useState(null);

    useEffect(() => {
        if(!state){
        postService.getPostById(id).then(({data}) => setPost(data))
        } else {
            setPost(state)
        }
    },[id, state])



    return (
        <div>
        <div>
            {post && <PostDetails post={post}/>}
        </div>
            <div><Outlet/></div>
        </div>
    );
};

export {SinglePostPage};
