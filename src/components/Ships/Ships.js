import React, {useEffect, useState} from 'react';
import {shipService} from "../../services/ship.service";
import {Ship} from "../Ship/Ship";
import css from './Ship.module.css'


const Ships = () => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        shipService.getAll().then(({data}) => setShips(data))
    }, [])

    return (
        <div className={css.ship}>
            {ships.filter(value => value.launch_year !== '2020' )
                .map((ship) => <Ship key={ship.flight_number} ship={ship}/> )}

        </div>
    );
};

export {Ships};

