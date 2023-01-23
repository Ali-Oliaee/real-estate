import { message } from "antd"
import axios from "axios"

const logError = (err) => {
  if (err.response) {
    const { status, statusText, data } = err.response
    const { method, url, baseURL } = err.response.config

    let error = ""
    error += `\nError ${status}: ${statusText}`
    error += `\nmethod: ${method}`
    error += `\nbase url: ${baseURL}\nendpoint: ${url}`
    error += `${!data.message ? `\ndata:\n${data}` : ""}`
    console.error(error)
  } else {
    console.error(err)
  }
}

const API_URL = "http://130.185.73.147:8585"
const API_BASE_PATH = "/api/v1/"

const instance = axios.create({
  baseURL: API_URL + API_BASE_PATH,
  headers: {
    "Content-Type": "application/json",
  },
})

instance.interceptors.request.use(
  (config) => {
    const { access } = JSON.parse(localStorage.getItem("token") || "{}")
    if (access) config.headers.Authorization = `Bearer ${access}`
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (process.env.NODE_ENV === "development") logError(error)
    const errCode = error?.response?.status || undefined

    if (!error) {
      message.error("Unexpected error")
    } else if (typeof error.response === "undefined") {
      message.error({ content: "Network Error", key: "NETWORK_ERROR" })
    } else if (
      error.code === "ECONNABORTED" ||
      (error.response && error.response.status === 408)
    ) {
      message.error("The server is taking to long to respond")
    } else if (errCode === 401) {
      const terminateSession = () => {
        localStorage.removeItem("token")
        message.error("نشست شما به پایان رسیده است.")
        message.error("لطفا دوباره وارد حساب شوید.")
        setTimeout(() => {
          window.location.reload()
        }, 2500)
      }
      terminateSession()
      return Promise.reject(error)
    } else if (errCode === 429) {
      message.error("Too many request")
    } else if (errCode >= 500 && errCode < 600) {
      message.error("Internal Server Error")
    } else if (errCode === 400) {
      const errData = error.response.data
      if (
        errData.error &&
        Array.isArray(errData.error) &&
        errData.error.length > 0
      ) {
        errData.error.map((item) => message.error(item))
        return Promise.reject(error)
      }

      return Promise.reject(error)
    }

    return Promise.reject(error)
  }
)

export default instance
