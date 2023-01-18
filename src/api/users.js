import axios from "../utils/axios"

export const getUsers = async () => {
  const { data } = await axios.get("/panel/users/")
  return data
}

export const getUser = async (id) => {
  const { data } = await axios.get(`/panel/users/${id}/`)
  return data
}

export const updateUser = async ({ id, ...rest }) => {
  const { data } = await axios.patch(`/panel/users/${id}/`, rest)
  return data
}

export const getCurrentUser = async (id) => {
  const { data } = await axios.get(`/users/update-information/${id}/`)
  return data
}
