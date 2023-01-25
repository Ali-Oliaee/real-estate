import React from "react"
import { LoginPage } from "../pages"

const PublicRoutes = [
  {
    cmp: <LoginPage />,
    path: "/",
  },
  {
    cmp: <LoginPage />,
    path: "/login",
  },
]

export default PublicRoutes
