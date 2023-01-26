import React from "react"
import { Redirect } from "react-router"
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

const PrivateRoutes = {
  manager: [
    {
      cmp: <Redirect to="/estates" />,
      path: "/",
      exact: true,
    },
    {
      cmp: <EstatesPage />,
      path: "/estates",
    },
    {
      cmp: <UsersPage />,
      path: "/users",
    },
    {
      cmp: <ImportDataPage />,
      path: "/import-data",
    },
    {
      cmp: <ArchiveEstatesPage />,
      path: "/archives",
    },
    {
      cmp: <ProfilePage />,
      path: "/profile",
    },
    {
      cmp: <NotFoundPage />,
      path: "*",
    },
  ],
  assistant: [
    {
      cmp: <Redirect to="/estates" />,
      path: "/",
      exact: true,
    },
    {
      cmp: <EstatesPage />,
      path: "/estates",
    },
    {
      cmp: <UsersPage />,
      path: "/users",
    },
    {
      cmp: <ArchiveEstatesPage />,
      path: "/archives",
    },
    {
      cmp: <ProfilePage />,
      path: "/profile",
    },
    {
      cmp: <NotFoundPage />,
      path: "*",
    },
  ],
  admin: [
    {
      cmp: <Redirect to="/commits" />,
      path: "/",
      exact: true,
    },
    {
      cmp: <CommitsPage />,
      path: "/commits",
    },
    {
      cmp: <EstatesPage />,
      path: "/estates",
    },
    {
      cmp: <ProfilePage />,
      path: "/profile",
    },
    {
      cmp: <NotFoundPage />,
      path: "*",
    },
  ],
  advisor: [
    {
      cmp: <Redirect to="/add-estate" />,
      path: "/",
      exact: true,
    },
    {
      cmp: <AddEstatePage />,
      path: "/add-estate",
    },
    {
      cmp: <ProfilePage />,
      path: "/profile",
    },
    {
      cmp: <NotFoundPage />,
      path: "*",
    },
  ],
  user: [
    {
      cmp: <Redirect to="/estates" />,
      path: "/",
      exact: true,
    },
    {
      cmp: <EstatesPage />,
      path: "/estates",
    },
    {
      cmp: <ProfilePage />,
      path: "/profile",
    },
    {
      cmp: <NotFoundPage />,
      path: "*",
    },
  ],
}

export default PrivateRoutes
