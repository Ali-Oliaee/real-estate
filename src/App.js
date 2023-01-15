import IR from "antd/es/locale/fa_IR"
import "dayjs/locale/fa"
import React from "react"
import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { ConfigProvider } from "antd"
import router from "./routes/auth"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider direction="rtl" locale={IR}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
