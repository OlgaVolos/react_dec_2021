import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services";
import {Comment} from "../../components/Comment/Comment";

const CommentsPage = () => {

    const [comments, setComments] = useState([]);

    const {id} = useParams()

    useEffect(() => {
        postService.getPostsComments(id).then(({data}) => setComments(data))
    }, [id])

    return (
        <div>
            {comments.map(comment=> <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {CommentsPage};
