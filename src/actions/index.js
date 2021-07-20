import { fetchPosts } from "api";
import { FETCH_ALL } from "../constants";

export const getPost = (btn) => async (dispatch) => {
  try {
    const { data } = await fetchPosts(btn);
    console.log(data);
    // console.log({ previous, next, results });
    // const btnPayload = { previous, next };
    dispatch({ type: FETCH_ALL, postsPayload: data });
  } catch (error) {
    console.error(error);
  }
};
