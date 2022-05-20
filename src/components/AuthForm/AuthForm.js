import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {userService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../redux";

const AuthForm = () => {

    const {register, reset, handleSubmit} = useForm();
    const [errors, setErrors] = useState(null); //краще робити через joi
    const {pathname, state} = useLocation();
    const [isLogin, setIsLogin] = [errors, setErrors];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loginError} = useSelector(state1 => state1.auth);


    useEffect(() => {
        pathname === '/register' ? setIsLogin(false) : setIsLogin(true)
// eslint-disable-next-line
    }, [pathname])

    const submit = async (user) => {
        try {
            if (!isLogin) {
                await userService.create(user)
                navigate('/login')
            } else {
                await dispatch(authActions.login({user}))
                navigate(state?.pathname || '/', {replace: true})
            } //перезаписуємо урлу
        } catch (e) {
            setErrors(e.response.data)

        }
        reset()


    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>{isLogin ? 'Login' : 'Register'}</button>
            <div>
                <div>{errors?.username && <span>{errors.username[0]}</span>}</div>
                <div>{errors?.password && <span>{errors.password[0]}</span>}</div>
                {loginError&& <span>Wrong username or password</span>}
            </div>
        </form>
    );
};

export {AuthForm};
