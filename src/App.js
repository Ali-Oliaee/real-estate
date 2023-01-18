import IR from "antd/es/locale/fa_IR"
import { useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { ConfigProvider } from "antd"
import authRouter from "./routes/auth"
import guestRouter from "./routes/guest"
import "dayjs/locale/fa"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

function App() {
  const isAuth = localStorage.getItem("token")

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault()
    })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider direction="rtl" locale={IR}>
        <RouterProvider router={isAuth ? authRouter : guestRouter} />
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
