import { createBrowserRouter } from "react-router-dom"
import { HomePage, LoginPage } from "../pages"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
])

export default router
