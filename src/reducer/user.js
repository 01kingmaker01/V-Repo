import { SET_USER, DEL_USER } from "../constants";

const checkUserData = () => {
  const userData = JSON.parse(localStorage.getItem("@user"));
  console.log(userData);
  if (userData) {
    return userData;
  } else {
    return null;
  }
};

export const userReducer = (state = checkUserData(), { type, userPayload }) => {
  switch (type) {
    case SET_USER:
      return userPayload;
    case DEL_USER:
      console.log({ userPayload });
      return userPayload;

    default:
      return state;
  }
};
