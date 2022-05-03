import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    catForUpdate: null
}

const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        addCat: (state, action) => {
            const {name} = action.payload;
            const newCat = {id: new Date().getTime(), name};
            state.cats.push(newCat);
        },
        deleteCat: (state, action) => {
            const {id} = action.payload;
            const index = state.cats.findIndex(cat => cat.id === id);
            state.cats.splice(index, 1);
        },
        setCatForUpdate: (state, action) => {
            const {cat} = action.payload;
            state.catForUpdate = cat
        },
        updateCat: (state, action) => {
            const {id, name} = action.payload;
            const index = state.cats.findIndex(cat => cat.id === id);
            state.cats[index].name = name;
            state.catForUpdate = false;

        }


    }

});

const {
    reducer: catReducer, actions: {
        addCat,
        deleteCat,
        setCatForUpdate,
        updateCat
    }
} = catSlice;

export default catReducer;

export const catActions = {
    addCat,
    deleteCat,
    setCatForUpdate,
    updateCat
}

//щоб оновити кота, ми в initialState мусимо зарезервувати під нього місце
//спочатку нам треба буде його сетати, а потім змінювати в стейті state.catForUpdate = cat
