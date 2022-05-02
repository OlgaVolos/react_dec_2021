import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addUser: (state, action) => {

            const {user} = action.payload; //витягнемо юзера
            const newUser = {id: new Date().getTime(), name: user}
            state.users.push(newUser)
        },
        deleteUser: (state, action)=> {
            const index = state.users.findIndex(value => value.id===action.payload.id);
            state.users.splice(index, 1)
        }

    }
})

const {reducer: userReducer, actions: {addUser, deleteUser}} = userSlice;
export default userReducer;

export const userActions = {
    addUser,
    deleteUser

}



// initialState виносимо в окрему константу як об"єкт

