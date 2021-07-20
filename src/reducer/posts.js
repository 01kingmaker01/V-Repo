import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../constants";

export const postsReducer = (state = [], { type, postsPayload }) => {
  switch (type) {
    case FETCH_ALL:
      return postsPayload;

    default:
      return state;
  }
};
