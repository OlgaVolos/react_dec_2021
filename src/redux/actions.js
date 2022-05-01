import {LOAD_POSTS, LOAD_USERS} from "./action.types";

const loadUsers = (payload, dispatch) => {
    dispatch({ type: LOAD_USERS, payload})
}
const loadPosts = (payload) => {
    return { type: LOAD_POSTS, payload}
}

export {
    loadUsers,
    loadPosts
}

//можна робити двома способами. перший спосіб - це скорочення.
// але треба потім в аргументи ще й dispatch класти
