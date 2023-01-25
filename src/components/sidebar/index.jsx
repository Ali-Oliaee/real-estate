import { Layout, Menu } from "antd"
import { useLocation, useHistory } from "react-router-dom"
import UserProfileButton from "../user-profile-button"
import {
  managerMenuItems,
  adminMenuItems,
  advisorMenuItems,
  userMenuItems,
  assistantMenuItems,
} from "./MenuItems"
import "./styles.scss"

const SideMenu = () => {
  const { Sider } = Layout
  const location = useLocation()
  const history = useHistory()
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")
  const { fullname } = JSON.parse(localStorage.getItem("user") || "{}")

  return (
    <Sider breakpoint="md" theme="light" width={200}>
      <div>
        <div className="user-container">
          <p className="username">{fullname}</p>
        </div>
        <div className="divider" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={location.pathname}
          onClick={({ key }) => history.push(key)}
          items={
            role === "manager"
              ? managerMenuItems
              : role === "assistant"
              ? assistantMenuItems
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
