import { createPost, fetchPosts } from "api";
import { CREATE, FETCH_ALL, SET_USER } from "../constants";

export const checkUserData = () => async (dispatch) => {
  try {
    const userData = localStorage.getItem("@user");
    dispatch({
      type: SET_USER,
      userPayload: JSON.parse(userData),
    });
  } catch (error) {
    console.error(error);
  }
};

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
