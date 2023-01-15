import { createBrowserRouter } from "react-router-dom"
import { ProfilePage, StatesPage } from "../pages"

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <StatesPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
])

export default authRouter
