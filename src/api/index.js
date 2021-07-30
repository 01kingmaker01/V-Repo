import axios from "axios";

const url = "http://127.0.0.1:8000/posts/";

export const fetchPosts = (link) => {
  return axios.get(link ? `${link}` : `${url}`, {
    headers: {
      Authorization: localStorage.getItem("@token"),
    },
  });
};

export const createPost = (newPost) => {
  return axios.post(url, newPost, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("@token"),
      data: localStorage.getItem("@uid"),
    },
  });
};
