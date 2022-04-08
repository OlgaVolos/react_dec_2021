import React from 'react';

function Comment({comment}) {

    return (
        <div>
            <span>{comment.id}</span>
            <span>{comment.body}</span>
            <hr/>

        </div>
    );
}

export default Comment;
