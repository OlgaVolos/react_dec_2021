import React, {useEffect, useState} from 'react';
import {postService} from "../services";
import Post from "./Post";

function Posts() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postService.getAllPosts().then(value => value.slice(0, 10)).then(value => setPosts(value))
    }, [])
    return (
        <div>
            {
               posts && posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}

export {Posts};
