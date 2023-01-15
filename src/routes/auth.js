import { createBrowserRouter } from "react-router-dom"
import {
  UsersPage,
  ProfilePage,
  StatesPage,
  CommitsPage,
  AddStatePage,
  NotFoundPage,
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

export default authRouter
