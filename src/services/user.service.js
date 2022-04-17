import {urls} from "../constants";
import {axiosService} from "./axios.service";

const userService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`)
}

export {userService}
