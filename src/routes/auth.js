import { createBrowserRouter } from "react-router-dom"
import {
  UsersPage,
  ProfilePage,
  EstatesPage,
  CommitsPage,
  AddEstatePage,
  NotFoundPage,
} from "../pages"

const authRouter = createBrowserRouter([
  {
    path: "/estates",
    element: <EstatesPage />,
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
    element: <AddEstatePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

export default authRouter
