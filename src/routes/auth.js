import { createBrowserRouter } from "react-router-dom"
import {
  UsersPage,
  ProfilePage,
  StatesPage,
  CommitsPage,
  AddStatePage,
} from "../pages"

const authRouter = createBrowserRouter([
  {
    path: "/states",
    element: <StatesPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/commits",
    element: <CommitsPage />,
  },
  {
    path: "/add-state",
    element: <AddStatePage />,
  },
])

export default authRouter
