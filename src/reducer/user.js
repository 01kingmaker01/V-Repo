import { SET_USER } from "../constants";

export const userReducer = (state = "", { type, userPayload }) => {
  switch (type) {
    case SET_USER:
      return userPayload;

    default:
      return state;
  }
};
