import {constants} from "../constants";

export const postService = {
    getAllPosts: () => fetch(constants.apiUrl + 'posts').then(value => value.json())
}
