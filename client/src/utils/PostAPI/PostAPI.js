import axios from 'axios';

const PostAPI = {
    getPosts: () => axios.get("http://localhost:3001/posts").then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
}

export default PostAPI;