import { createBrowserRouter } from "react-router-dom"
import { LoginPage, StatesPage } from "../pages"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <StatesPage />,
  },
])

export default router
