import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decCount1,
    decCount2,
    incCount1,
    incCount2,
    resetCount1,
    resetCount2} from "../redux";

const Counter = () => {

    const {count1, count2} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter1 : {count1}</h1>
            <button onClick={() => dispatch(incCount1())}>inc</button>
            <button onClick={() => dispatch(decCount1())}>dec</button>
            <button onClick={() => dispatch(resetCount1(5))}>reset</button>
            <hr/>
            <h1>Counter2 : {count2}</h1>
            <button onClick={() => dispatch(incCount2())}>inc</button>
            <button onClick={() => dispatch(decCount2())}>dec</button>
            <button onClick={() => dispatch(resetCount2())}>reset</button>

        </div>
    );
};

export {Counter};

//     const counterSlice = useSelector(state => state.counter) те ж саме, що нижче
//    const {count1, count2} = useSelector(state => state.counter);
// <button onClick={() => dispatch(resetCount1(5))}>reset</button> можемо передати 5, бо там в нас є action
// в інших не передаємо, бо немає переданого екшн, а тільки стейт
