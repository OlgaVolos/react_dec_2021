import axios, {AxiosResponse} from "axios";
import {IUser} from "../interfaces";

type AxiosType<T> = Promise<AxiosResponse<T>> // щоб не прописувати кожен раз

export const userService = {
    getAll: (): AxiosType<IUser[]> => axios.get('https://jsonplaceholder.typicode.com/users'),
    getById: (id: number): AxiosType<IUser> => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

}
