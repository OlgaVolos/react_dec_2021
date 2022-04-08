import axios from "axios";
import baseURL from "../constants/urls";

const axiosService = axios.create({baseURL});

export {axiosService}


//якщо ключ і значення не співпадає, то пишемо {baseURL: назва}
