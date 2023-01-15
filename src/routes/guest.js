import { createBrowserRouter } from "react-router-dom"
import { ForgotPasswordPage, HomePage, LoginPage, RegisterPage } from "../pages"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
])

export default router
