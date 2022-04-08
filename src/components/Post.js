import React from 'react';

function Post({post}) {
    const {id, title, body} = post

    return (
        <div>
            <span>{id}</span>
            <span>{title}</span>
            <span>{body}</span>
            <hr/>
        </div>
    );
}

export default Post;
