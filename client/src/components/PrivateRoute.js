import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLoggedIn, user, ...rest }) => (
  <Route
    {...rest}
    render={({ props }) =>
      isLoggedIn ? (
        <Component {...props} user={user} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
