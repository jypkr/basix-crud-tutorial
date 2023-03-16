import axios from 'axios';

const PostAPI = {
    getAllPosts: () => axios.get("http://localhost:3001/api/posts"),
    createPost: (post) => axios.post("http://localhost:3001/api/posts", post),
    deletePost: (id) => axios.delete(`http://localhost:3001/api/posts/${id}`),
    editPost: (id, {editTitle, editText}) => axios.put(`http://localhost:3001/api/posts/${id}`, {title: editTitle, postText: editText})
}

export default PostAPI;