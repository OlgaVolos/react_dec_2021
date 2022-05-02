import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../redux";

const Counter = () => {

    const {count1, count2} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const resetInput = useRef();

    return (
        <div>
            <h1>Counter1 : {count1}</h1>
            <button onClick={() => dispatch(counterActions.incCount1())}>inc</button>
            <button onClick={() => dispatch(counterActions.decCount1())}>dec</button>
            <button onClick={() => dispatch(counterActions.resetCount1(5))}>reset</button>
            <hr/>
            <h1>Counter2 : {count2}</h1>
            <button onClick={() => dispatch(counterActions.incCount2())}>inc</button>
            <button onClick={() => dispatch(counterActions.decCount2())}>dec</button>
            <input type="text" ref={resetInput} />
            <button onClick={() => dispatch(counterActions.resetCount2(+resetInput.current.value))}>reset</button>

        </div>
    );
};

export {Counter};

//     const counterSlice = useSelector(state => state.counter) те ж саме, що нижче
//    const {count1, count2} = useSelector(state => state.counter);
//  <button onClick={() => dispatch(counterActions.resetCount1(5))}>reset</button> можемо передати 5, бо там в нас є action
// в інших не передаємо, бо немає переданого екшн, а тільки стейт
