import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    getCarById: (id) => axiosService.get(`${urls.cars}/${id}`),
    createCar: (car) => axiosService.post(urls.cars, car),
    updateCarById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar),
    deleteCar: (id) => axiosService.delete(`${urls.cars}/${id}`)
}



export {
    carService
}

