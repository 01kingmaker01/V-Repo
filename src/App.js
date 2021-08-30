import React, { useEffect } from "react";
import { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { Redirect, Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "firebase/index";
import { Form } from "components/Form";
import Home from "components/Home";
import Login from "components/Login";
import NoMatch from "components/NoMatch";
import { SET_USER } from "constants/index";
import { checkUserData } from "actions";
import { Departments } from "components/Departments";
import FiveColumnWithInputForm from "components/footers/footer";

const App = () => {
  const dispatch = useDispatch();

  const { userReducer } = useSelector((state) => {
    return state;
  });

  // const checkUserData = () => {
  //   const userData = localStorage.getItem("@user");
  //   console.log(userData);
  //   if (userData) {
  //     return dispatch({
  //       type: SET_USER,
  //       userPayload: JSON.parse(userData),
  //     });
  //   }
  // };

  // if (!userReducer) {
  //   dispatch(checkUserData());
  // }

  return (
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/f" component={FiveColumnWithInputForm} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/404" component={NoMatch}>
            {userReducer?.jobTitle === "Student" ||
            userReducer?.jobTitle === undefined ? (
              <Redirect
                to={{
                  pathname: "/",
                  state: { msg: "User not Authorized" },
                }}
              />
            ) : (
              <NoMatch />
            )}
          </Route>

          <Route exact path="/">
            {userReducer?.jobTitle === undefined ? (
              <Redirect
                to={{
                  pathname: "login",
                  state: { msg: "Login in required" },
                }}
              />
            ) : (
              <Home />
            )}
          </Route>

          <Route exact path="/add">
            {userReducer?.jobTitle === "Student" ||
            userReducer?.jobTitle === undefined ? (
              <Redirect
                to={{
                  pathname: "/",
                  state: { msg: "User not Authorized" },
                }}
              />
            ) : (
              <Form />
            )}
          </Route>

          <Route path="/departments">
            <Departments />
          </Route>

          <Route path="/about">
            <Redirect
              to={{
                pathname: "/",
                state: {
                  msg: `About Section Coming Soon!!!`,
                },
              }}
            />
          </Route>

          <Route path="/contact">
            <Redirect
              to={{
                pathname: "/",
                state: {
                  msg: `Contact Section Coming Soon!!!`,
                },
              }}
            />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </>
    </ConnectedRouter>
  );
};

export default App;
