import React, {useEffect, useState} from 'react';
import {commentService} from "../services";
import Comment from "./Comment";

function Comments() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAllComments().then(value => setComments(value))
    }, [])
    return (

        <div>
            {
                comments.map((comment) => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
}

export {Comments};
