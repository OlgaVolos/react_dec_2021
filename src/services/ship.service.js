import {axiosService} from "./axios.service";
import baseURL from "../constants/baseUrl";


const shipService = {
    getAll: () => axiosService.get(baseURL)
}

export {shipService}
