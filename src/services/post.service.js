import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const postService = {
    getAllPosts: () => axiosService.get(urls.posts),
    getPost: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
}
