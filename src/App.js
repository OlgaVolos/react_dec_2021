import './App.css';
import {useReducer} from "react";

const init =(initCount) => {
  return {
    counter1: initCount,
    counter2: initCount
  }
}
const reducer = (state, action) => {
  switch (action.type){
    case 'inc':
      return{...state, counter1: state.counter1+1}
    case 'dec':
      return{...state, counter1: state.counter1-1}
    case 'reset':
      return{...state, counter1: 0}
    case 'set':
      return {state, counter1: action.payload}
  }


}

function App() {
  const [state, dispatch] = useReducer(reducer, 0, init);

  // const inc = () => {
  //   dispatch({type: 'inc'})
  // }
  return (
    <div >
      <div>
        <div>{state.counter1}</div>
        <button onClick={() => dispatch({type: 'inc'})}>inc</button>
        <button onClick={() => dispatch({type: 'dec'})}>dec</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        <button onClick={() => dispatch({type: 'set', payload:10})}>setTo10</button>
      </div>

    </div>
  );
}

export default App;
//state значення чогось, що буде змінюватися
// dispatch змінює значення state, змінюється за допомогою команд
// const inc = () => {
//     dispatch({type: 'inc'})
//   } можна писати для кожного функцыъ, а можна одразу передати в кнопку
