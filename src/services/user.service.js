import {axiosService} from "./axios.servise";
import {urls} from "../constants";

const userService = {
    getAllUsers: () => axiosService.get(urls.users),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`),

}
export {userService}
