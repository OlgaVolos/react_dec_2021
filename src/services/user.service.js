import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    create: (user) => axiosService.post(urls.user, user)
}

export {
    userService
}
