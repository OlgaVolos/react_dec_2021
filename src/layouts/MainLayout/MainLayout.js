import React from 'react';
import css from './MainLayout.module.css'
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks";
const MainLayout = () => {

    const navigate = useNavigate();
    const {user, logOut} = useAuth();
    return (
        <div>
            <div className={css.header}>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts" replace>Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                {user && <h1>{user} <button onClick={() => logOut(() => navigate('/'))}>logout</button> </h1>}
            </div>
            <hr/>
            <div>
                <button onClick={() => navigate(-1)}>prev</button>
                <button onClick={() => navigate(1)}>next</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
// <Outlet/> допомагає нам рендерити компоненти, має бути там, де є дочірні компоненти
// а перезагружає сторінку, тому замінюємо на Link to
// другий варіант - це NavLink, додає клас ектів і дає змогу його стиізувати
// navigate діє як навігація вперед-назад
// ще один варіант - він може знищувати історію (компонента ПОСТ)
// replace стирає попередній хід, попередній роут. Це використовують для логінації
// щоб сторінка логінації не зберігалася і залогінений юзер не заходив на неї

