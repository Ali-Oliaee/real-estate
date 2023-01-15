import { Layout, Menu } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import UserProfileButton from "../user-profile-button"
import {
  managerMenuItems,
  adminMenuItems,
  advisorMenuItems,
  userMenuItems,
} from "./MenuItems"
import "./styles.scss"

const SideMenu = () => {
  const { Sider } = Layout
  const location = useLocation()
  const navigate = useNavigate()
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")

  return (
    <Sider breakpoint="md" theme="light" width={200}>
      <div>
        <div className="user-container">
          <p className="username">امیر غفوری</p>
        </div>
        <div className="divider" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={location.pathname}
          onClick={({ key }) => {
            console.log(key)
            navigate(key, { replace: true })
          }}
          items={
            role === "manager"
              ? managerMenuItems
              : role === "admin"
              ? adminMenuItems
              : role === "advisor"
              ? advisorMenuItems
              : userMenuItems
          }
        />
      </div>
      <UserProfileButton />
    </Sider>
  )
}

export default SideMenu
