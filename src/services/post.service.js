import {axiosService} from "./axios.servise";
import {urls} from "../constants";

const postService = {
    getAllPosts: () => axiosService.get(urls.posts),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`),
    getPostsByUserId: (id) => axiosService.get(`${urls.users}/${id}/posts`),
    getPostsComments: (id) => axiosService.get(`${urls.posts}/${id}/comments`)


}

export {postService}
