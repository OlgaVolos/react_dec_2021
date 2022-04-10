import React from 'react';

const UserDetails = ({user, setUserIdForPosts}) => {
    const {id, name, email, phone} = user

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <input type="button" value={"show posts"} onClick={() => setUserIdForPosts(user.id)}/>

        </div>
    );
};

export {UserDetails};
