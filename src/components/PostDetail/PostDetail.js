import React from 'react';

const PostDetail = ({post}) => {
    const {id, userId, title, body } = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
}

export {PostDetail};
