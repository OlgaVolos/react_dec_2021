import React from 'react';

function User({user, getUserId, getSingle}) {
    const {id, name, username} = user



    return (
        <div className={'silver'}>
            {id} -- {name} -- {username}
            <button onClick={() => {
                getUserId(id)
                getSingle(user)
            }
            }>
                Click
            </button>
        </div>
    );
}

export {User};
