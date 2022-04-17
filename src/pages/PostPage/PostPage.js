import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../../components";
import {Outlet} from "react-router-dom";

const PostPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div style={{display: 'flex'}}>
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div> <Outlet/> </div>
        </div>
    );
};
export {PostPage};

// Outlet без нього не відрендериться конкретний пост,
//має бути в батьківського компонента
