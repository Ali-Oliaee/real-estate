import { createBrowserRouter, Navigate } from "react-router-dom"
import { LoginPage } from "../pages"

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <LoginPage />,
  },
])

export default guestRouter
