import React from 'react';

const User = ({user, setUser, setUserIdForPosts}) => {
    const {id, name} = user;

    const click = () => {
        setUserIdForPosts(false);
        setUser(user)
    }
    return (
        <div>
            {id}--{name}
            <input type="button" value={'show info'} onClick={click}/>

        </div>
    );
};

export {User};
