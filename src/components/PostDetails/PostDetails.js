import React from 'react';
import {Button} from "../Button/Button";

const PostDetails = ({post}) => {

    const {id, title, body} = post;



    return (
        <div>
            <div>{id} {title}</div>
            <div>{body}</div>
            <Button to={'comments'}>Get comments</Button>
        </div>
    );
};

export {PostDetails};
