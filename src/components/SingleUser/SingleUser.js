import React from 'react';

function SingleUser({user}) {
    const {id, name, username} = user


    return (
        <div>
            {id} -- {name} -- {username}

        </div>
    );
}

export {SingleUser};
