import React from "react";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../constants";
import { auth, provider } from "../../firebase";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      const results = await auth.signInWithPopup(provider);

      const token = await auth?.currentUser?.getIdToken(true);
      if (token) {
        localStorage.setItem("@token", token);
      }
      const { email, mobilePhone, photoURL, displayName, uid } = results.user;
      const jobTitle = results.additionalUserInfo.profile.jobTitle;
      return dispatch({
        type: SET_USER,
        userPayload: {
          email,
          mobilePhone,
          photoURL,
          displayName,
          uid,
          jobTitle,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://www.logo.wine/a/logo/Microsoft/Microsoft-Logo.wine.svg"
          alt="Microfoft"
        />
      </div>

      <button type="submit" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
