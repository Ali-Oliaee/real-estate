import axios from "../utils/axios"

export const getEstates = async () => {
  const { data } = await axios.get("estate/list/")
  return data
}

export const getEstate = async (id) => {
  const { data } = await axios.get(`/estate/list/${id}/`)
  return data
}

export const getPendingEstates = async () => {
  const { data } = await axios.get("/estate/unchecked-home/")
  return data
}
