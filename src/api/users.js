import axios from "../utils/axios"

export const getUsers = async () => {
  const { data } = await axios.get("users/list/")
  return data
}

export const getUser = async (id) => {
  if (id) {
    const { data } = await axios.get(`/users/get-user-data/${id}/`)
    return data
  }
}

export const getUserHistory = async () => {
  const { data } = await axios.get("/users/user-history/")
  return data
}

export const getUserHistoryById = async (id) => {
  if (id) {
    const { data } = await axios.get(`/users/user-history-list/${id}/`)
    return data
  }
}
