import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <hr/>
            <div>{post.userId}</div>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <hr/>

        </div>
    );
};

export {Post};
