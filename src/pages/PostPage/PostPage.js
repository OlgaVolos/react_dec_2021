import React, {useContext, useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../../components";
import {Outlet} from "react-router-dom";
import {MyContext} from "../../index";

const PostPage = () => {
    const [posts, setPosts] = useState([]);
    // const value = useContext(MyContext);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data));
        // console.log(value);
        // value.name='Olha'
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
// щоб скористатися контекстом, використовують хук useContext
