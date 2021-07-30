import { createPost, fetchPosts } from "api";
import { CREATE, FETCH_ALL } from "../constants";

export const getPost = (btn) => async (dispatch) => {
  try {
    const { data } = await fetchPosts(btn);
    dispatch({ type: FETCH_ALL, postsPayload: data });
  } catch (error) {
    console.error(error);
  }
};

export const makePost = (post) => async (dispatch) => {
  try {
    const { data } = await createPost(post);
    console.log("makePost");
    console.log({ data });

    dispatch({ type: CREATE, postsPayload: data });
  } catch (e) {
    console.error(e);
  }
};
