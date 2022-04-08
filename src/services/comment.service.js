import {constants} from "../constants";

export const commentService = {
    getAllComments: () => fetch(constants.apiUrl + 'comments').then(value => value.json())
}
