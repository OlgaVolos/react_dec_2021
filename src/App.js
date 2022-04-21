import './App.css';
import {useReducer} from "react";

const init = (initCount) => {
    return {
        counter1: initCount,
        counter2: initCount,
        counter3: initCount
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {
                ...state, counter1: state.counter1 + 1
            }
        case 'dec1':
            return {
                ...state, counter1: state.counter1 - 1
            }
        case 'reset1':
            return {
                ...state, counter1: 0
            }
        case 'inc2':
            return {
                ...state, counter2: state.counter2 + 2
            }
        case 'dec2':
            return {
                ...state, counter2: state.counter2 - 2
            }
        case 'reset2':
            return {
                ...state, counter2: 0
            }
        case 'set1':
            return {
                ...state, counter3: state.counter3 + action.payload
            }
        case 'set2':
            return {
                ...state, counter3: state.counter3 - action.payload
            }
        case 'set3':
            return {
                ...state, counter3: action.payload
            }
        default: return state

    }
}


function App() {
    const [state, dispatch] = useReducer(reducer, 0, init);


    // const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0});


    return (
        <div>
            <div>
                <h3>Counter1</h3>
                <div>{state.counter1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>inc1</button>
                <button onClick={() => dispatch({type: 'dec1'})}>dec1</button>
                <button onClick={() => dispatch({type: 'reset1'})}>reset1</button>
            </div>
            <div>
                <h3>Counter2</h3>
                <div>{state.counter2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>inc2</button>
                <button onClick={() => dispatch({type: 'dec2'})}>dec2</button>
                <button onClick={() => dispatch({type: 'reset2'})}>reset2</button>
            </div>
            <div>
                <h3>Counter3</h3>
                <div>{state.counter3}</div>
                <button onClick={() => dispatch({type: 'set1', payload: 10})}>set1</button>
                <button onClick={() => dispatch({type: 'set2', payload: 10})}>set2</button>
                <button onClick={() => dispatch({type: 'set3', payload: 0})}>set3</button>
            </div>

        </div>
    );
}

export default App;
