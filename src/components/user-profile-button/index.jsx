import React from "react"
import { Menu, Modal } from "antd"
import { InfoCircleOutlined, LogoutOutlined } from "@ant-design/icons"
import pkj from "../../../package.json"
import { useHistory } from "react-router-dom"
import "./styles.scss"

/**
 *
 * @param {string=} [className='']
 */
const UserProfileButton = () => {
  const history = useHistory()

  const handleLogout = () => {
    Modal.confirm({
      content: "آیا مایل به خروج از حساب کاربری خود هستید",
      onOk: () => {
        localStorage.clear()
        history.push("/login")
        window.location.reload()
      },
      okText: "بله،‌ خارج شو",
      cancelText: "نه،‌ بیخیال",
      okType: "danger",
      closable: true,
      maskClosable: false,
      centered: true,
    })
  }

  const items = [
    {
      key: "version",
      icon: <InfoCircleOutlined />,
      disabled: true,
      label: `نسخه ${pkj.version}`,
      className: "profile-menu-item readonly",
    },
    {
      icon: <LogoutOutlined />,
      label: "خروج از حساب",
      danger: true,
      key: "logout",
      className: "profile-menu-item danger",
      onClick: handleLogout,
    },
  ]

  return (
    <div style={{ margin: "12px 24px", justifySelf: "flex-end" }}>
      <Menu
        mode="vertical"
        className="profile-menu"
        style={{ padding: 0, border: "none" }}
        items={items}
      />
    </div>
  )
}

export default UserProfileButton
