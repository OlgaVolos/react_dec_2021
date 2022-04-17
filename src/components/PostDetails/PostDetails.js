import React from 'react';

const PostDetails = ({post}) => {

    const {id, title, body} = post;



    return (
        <div>
            <div>{id} {title}</div>
            <div>{body}</div>
        </div>
    );
};

export {PostDetails};
