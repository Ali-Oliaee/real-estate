import { Layout, Menu } from "antd"
// import { useHistory, useLocation } from "react-router-dom"
import { AdminMenuItems, OperatorMenuItems, UserMenuItems } from "./MenuItems"
// import { UserProfileBtn } from "../UserProfileBtn"
import "./styles.scss"

const SideMenu = () => {
  const { Sider } = Layout
  // const history = useHistory()
  // const location = useLocation()
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")

  return (
    <>
      <Sider
        style={{
          overflowY: "auto",
          overflowX: "hidden",
          height: "100vh",
          position: "fixed",
          right: 0,
        }}
        breakpoint="md"
        width={200}
      >
        <div>
          <div className="sidebar-logo-container">
            <h1 className="sidebar-heading">پنل مدیریت</h1>
          </div>
          <div className="divider" />
          <Menu
            theme="light"
            mode="inline"
            // defaultSelectedKeys={location.pathname}
            // onClick={({ key }) => history.push(key)}
            items={
              // eslint-disable-next-line no-nested-ternary
              role === "admin"
                ? AdminMenuItems
                : role === "operator"
                ? OperatorMenuItems
                : UserMenuItems
            }
          />
        </div>
        {/* <UserProfileBtn /> */}
      </Sider>
    </>
  )
}

export default SideMenu
