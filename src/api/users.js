import axios from "../utils/axios"

export const getUsers = async () => {
  const { data } = await axios.get("users/list/")
  return data
}

export const getUser = async (id) => {
  if (id) {
    const { data } = await axios.get(`/users/list/${id}/`)
    return data
  }
}

export const getUserHistory = async () => {
  const { data } = await axios.get("/users/user-history/")
  return data
}
