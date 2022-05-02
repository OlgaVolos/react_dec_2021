import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    count1: 0,
    count2: 0
}

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        incCount1:  state => {
            state.count1+=1
        },
        decCount1: state => {
            state.count1-=1
        },
        resetCount1: (state, action) => {
            state.count1 = action.payload || 0
        },
        incCount2: state => {
            state.count2+=2
        },
        decCount2: state => {
            state.count2-=2
        },
        resetCount2: (state, action) => {
            state.count2 = action.payload || 0
        }
    }
});

//counterSlice - це є action + reducers і ми їх маємо витягнути назовні

const {reducer: counterReducer, actions: {
    incCount1,
    decCount1,
    resetCount1,
    incCount2,
    decCount2,
    resetCount2}} = counterSlice;

export default counterReducer;
export {
    incCount1,
    decCount1,
    resetCount1,
    incCount2,
    decCount2,
    resetCount2

}
