import {constants} from "../constants";

export const userService = {
    getAllUsers: () => fetch(constants.apiUrl + 'users').then(value => value.json())
}
