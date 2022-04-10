import axios from "axios";
import baseURL from "../constants/baseUrl";

const axiosService = axios.create({baseURL});

export {axiosService}
