import React from 'react';
import css from './MainLayout.module.css'
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
const MainLayout = () => {

    const navigate = useNavigate();
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
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

