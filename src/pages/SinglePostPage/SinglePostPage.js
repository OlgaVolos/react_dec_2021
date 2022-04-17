import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getPostById(id).then(({data}) => setPost(data))
    },[id])



    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SinglePostPage};
