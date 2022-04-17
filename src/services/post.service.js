import {axiosService} from "./axios.servise";
import {urls} from "../constants";

const postService = {
    getAllPosts: () => axiosService.get(urls.posts),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {postService}
