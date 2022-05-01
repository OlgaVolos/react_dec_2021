import {combineReducers, createStore} from "redux";
import {userReducer} from "./user.reducer";
import {postsReducer} from "./posts.reducer";

const reducers = combineReducers({usersState: userReducer, postsState: postsReducer});

const store = createStore(reducers);

export default store
