import axios from "axios";

const url = "http://127.0.0.1:8000/posts/";

export const fetchPosts = (link) => {
  console.log(link);
  return axios.get(link ? `${link}` : `${url}`);
};
