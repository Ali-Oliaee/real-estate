import { createBrowserRouter, Navigate } from "react-router-dom"
import {
  UsersPage,
  ProfilePage,
  EstatesPage,
  CommitsPage,
  AddEstatePage,
  NotFoundPage,
  ArchiveEstatesPage,
  ImportDataPage,
} from "../pages"

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/estates" />,
  },
  {
    path: "/estates",
    element: <EstatesPage />,
  },
  {
    path: "/estates/:mode/:id",
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
    path: "/users/:mode/:id",
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
    path: "/archives/:id",
    element: <ArchiveEstatesPage />,
  },
  {
    path: "/import-data",
    element: <ImportDataPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

export default authRouter
