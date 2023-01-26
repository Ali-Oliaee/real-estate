import IR from "antd/es/locale/fa_IR"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ConfigProvider } from "antd"
import dayjs from "dayjs"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import PrivateRoutes from "./routes/private-route"
import PublicRoutes from "./routes/public-route"
import jalaliday from "jalaliday"
import "dayjs/locale/fa"
import { PublicRoute, PrivateRoute } from "./routes/custom-routes"
import { AdminLayout } from "./layouts"

dayjs.extend(jalaliday)
dayjs.locale("fa")
dayjs.calendar("jalali")

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

function App() {
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault()
    })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider direction="rtl" locale={IR}>
        <Router>
          <Switch>
            {role === "manager" &&
              PrivateRoutes.manager.map((item, index) => (
                <PrivateRoute key={[index]} exact={item.exact} path={item.path}>
                  {item.cmp}
                </PrivateRoute>
              ))}
            {role === "assistant" &&
              PrivateRoutes.assistant.map((item, index) => (
                <PrivateRoute key={[index]} exact={item.exact} path={item.path}>
                  {item.cmp}
                </PrivateRoute>
              ))}
            {role === "admin" &&
              PrivateRoutes.admin.map((item, index) => (
                <PrivateRoute key={[index]} exact={item.exact} path={item.path}>
                  {item.cmp}
                </PrivateRoute>
              ))}
            {role === "advisor" &&
              PrivateRoutes.advisor.map((item, index) => (
                <PrivateRoute key={[index]} exact={item.exact} path={item.path}>
                  {item.cmp}
                </PrivateRoute>
              ))}
            {role === "user" &&
              PrivateRoutes.user.map((item, index) => (
                <PrivateRoute key={[index]} exact={item.exact} path={item.path}>
                  {item.cmp}
                </PrivateRoute>
              ))}
            {PublicRoutes.map((item, index) => (
              <PublicRoute key={[index]} path={item.path}>
                {item.cmp}
              </PublicRoute>
            ))}
          </Switch>
        </Router>
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
