import { UserOutlined } from "@ant-design/icons"
import { Avatar, Layout, Menu } from "antd"
import { useLocation } from "react-router-dom"
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
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")

  return (
    <Sider breakpoint="md" theme="light" width={200}>
      <div className="user-container">
        <Avatar icon={<UserOutlined />} size={40} shape="circle" />
        <p className="username">UserName</p>
      </div>
      <div className="divider" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={location.pathname}
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
    </Sider>
  )
}

export default SideMenu
