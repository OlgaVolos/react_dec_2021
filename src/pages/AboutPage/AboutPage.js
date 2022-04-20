import React, {useContext} from 'react';
import {MyContext} from "../../index";

const AboutPage = () => {
    const value = useContext(MyContext);
    console.log(value);
    return (
        <div>
            AboutPage
        </div>
    );
};

export {AboutPage};
