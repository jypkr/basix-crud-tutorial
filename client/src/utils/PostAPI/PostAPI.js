import axios from 'axios';

const PostAPI = {
    getAllPosts: () => axios.get("http://localhost:3001/api/posts"),
}

export default PostAPI;