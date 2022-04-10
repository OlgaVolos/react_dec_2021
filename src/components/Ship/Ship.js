import React from 'react';

const Ship = ({ship}) => {


    return (
        <div>
            <hr/>
            <div>{ship.flight_number}---{ship.mission_name}</div>
            <div>{ship.launch_year}</div>
            <img src={ship.links.mission_patch_small} alt="ship"/>
            <hr/>
        </div>
    );
};

export {Ship};

// mission_name
// launch_year
// links.mission_patch_small
