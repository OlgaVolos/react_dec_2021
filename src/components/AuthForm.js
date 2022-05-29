import React from 'react';
import {useFormik} from "formik";
import {signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../firebase";

const AuthForm = () => {



    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            email1: '',
            password1: ''
        },
        onSubmit: (values, actions) => {

            actions.resetForm()
        }

    })
    const register = () => {
        createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
            .then((userCredential)=>{
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, formik.values.email1, formik.values.password1)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`is logined`, user.email)
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const logout = async () => {
        await signOut(auth)
        console.log(`user is logout`)
    }






    return (
        <div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label>Email:
                            <input type="text"
                                   id={'email'}
                                   name={'email'}
                                   placeholder={'email'}
                                   value={formik.values.email}
                                   onChange={formik.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Password:
                            <input type="text"
                                   id={'password'}
                                   name={'password'}
                                   placeholder={'password'}
                                   value={formik.values.password}
                                   onChange={formik.handleChange}
                            />
                        </label>
                    </div>
                    <button onReset={formik.handleReset} onClick={register} type='submit'>Register</button>
                </form>
            </div>
            <hr/>
            <div>
                <form onSubmit={formik.handleSubmit} >
                    <div>
                        <label>Email:
                            <input type="text"
                                   id={'email1'}
                                   name={'email1'}
                                   placeholder={'email1'}
                                   value={formik.values.email1}
                                   onChange={formik.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Password:
                            <input type="text"
                                   id={'password1'}
                                   name={'password1'}
                                   placeholder={'password1'}
                                   value={formik.values.password1}
                                   onChange={formik.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <button type='submit' onClick={login}>Login</button>

                    </div>
                </form>

            </div>
            <hr/>
            <button onClick={logout}>Sign out</button>
        </div>

    );
};

export {AuthForm};

