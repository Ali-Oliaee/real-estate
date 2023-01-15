import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../pages"

const guestRouter = createBrowserRouter([
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
