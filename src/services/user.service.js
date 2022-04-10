import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const userService = {
    getAllUsers: () => axiosService.get(urls.users),
    getUser: (id) => axiosService.get(`${urls.users}/${id}`)

}
