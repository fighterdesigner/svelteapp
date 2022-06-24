import axios from "axios";

// get all posts
export const getAllPosts = async () => {
    try {
        return await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=6");
    } catch(err) {
        return err;
    }
}

// add a post
export const addApost = async (post) => {
    try {
        return await axios("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            data: post
        });
    } catch(err) {
        return err;
    }
}

// delete post
export const deletePost = async (postId) => {
    try {
        return await axios(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE"
        });
    } catch(err) {
        return err;
    }
}
