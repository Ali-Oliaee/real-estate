import { createBrowserRouter } from "react-router-dom"
import { LoginPage, StatesPage, ProfilePage } from "../pages"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <StatesPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
])

export default router
