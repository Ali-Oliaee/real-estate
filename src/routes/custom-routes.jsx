import React from "react"
import { Route, Redirect } from "react-router-dom"

export const PrivateRoute = ({ children, ...rest }) => {
  const isAuth = localStorage.getItem("token")
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
export const PublicRoute = ({ children, ...rest }) => {
  const isAuth = localStorage.getItem("token")
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
