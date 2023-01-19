import { createBrowserRouter } from "react-router-dom"
import {
  UsersPage,
  ProfilePage,
  EstatesPage,
  CommitsPage,
  AddEstatePage,
  NotFoundPage,
  ArchiveEstatesPage,
} from "../pages"

const authRouter = createBrowserRouter([
  {
    path: "/estates",
    element: <EstatesPage />,
  },
  {
    path: "/estates/:id",
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
    path: "/users/:id",
    element: <UsersPage />,
  },
  {
    path: "/commits",
    element: <CommitsPage />,
  },
  {
    path: "/add-estate",
    element: <AddEstatePage />,
  },
  {
    path: "/archives",
    element: <ArchiveEstatesPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

export default authRouter
