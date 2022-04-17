import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../Button/Button";

const Post = ({post}) => {
    const {id, title} = post;

    // const navigate = useNavigate(); // ще один варіант, як робили колись))) розробники зараз не рекомендують так робити

    return (
        <div>
            {id}--{title} <Button to={id.toString()} state={post}>Get details</Button>
            {/*{id}--{title} <Button onClick={() => navigate(id.toString())}>Get details</Button>*/}
        </div>
    );
};

export {Post};

//id завжди число, лінка хоче стрічку, тому або приводимо до стрінги, або ${id}
//             {id}--{title} <Link to={id.toString()} state={post}>Get details</Link> приклад з лінкою
// navigate вміє працювати по-іншому, описано в MainLayout
