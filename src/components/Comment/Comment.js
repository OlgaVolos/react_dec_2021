import React from 'react';

const Comment = ({comment}) => {

    const {id, postId, name} = comment;


    return (
        <div>
            {id}). {postId} {name}
        </div>
    );
};

export {Comment};
