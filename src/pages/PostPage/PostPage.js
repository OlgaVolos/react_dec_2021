import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../../components";
import {Outlet, useSearchParams} from "react-router-dom";

const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        postService.getAll(query.get('page'), 20).then(({data}) => setPosts(data))
    }, [query])

    const nextPage = () => {
        // let page = query.get('page');
        // page = +page+1;
        // setQuery({page: page.toString()})

        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++
        setQuery(queryObj)
    }

    return (
        <div style={{display: 'flex'}}>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/>)}

                <button onClick={() => nextPage()}>Next page</button>

            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};
export {PostPage};

// Outlet без нього не відрендериться конкретний пост,
//має бути в батьківського компонента
// useSearchParams() хук, за допомогою якого передамо параметри
// query.get('page') витягне з параметрів саме сторінку, наступним параметром ми
// можемо змынити лымыт, навіть, якщо він вказаний в сервісах
// let page = query.get('page');
// page = +page+1;
// setQuery({page: page.toString()}) - цим методом нам треба змінювати всі параметри вручну

// const queryObj = Object.fromEntries(query.entries());
// queryObj.page++
// setQuery(queryObj) дає змогу змінити все одночасно
