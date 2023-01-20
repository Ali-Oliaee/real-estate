import React from "react"
import { Button, message, Popconfirm, Table } from "antd"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import axios from "../../utils/axios"
import Fuse from "fuse.js"
import { Link } from "react-router-dom"
import EditUserModal from "./edit-user-modal"
import dayjs from "dayjs"
import UserInfoModal from "./user-info-modal"

const data = [
  {
    access_codes: "B3",
    address: "mashhad",
    date_joined: "1674173132",
    fullname: "علی علیایی",
    id: 2,
    last_login: "1674173278",
    phone: "09105753695",
    role: "user",
    username: "کاربر۱",
  },
  {
    access_codes: null,
    address: null,
    date_joined: "1674173495",
    fullname: "سجاد فانی",
    id: 3,
    last_login: "1674173550",
    phone: null,
    role: "advisor",
    username: "مشاور۱",
  },
  {
    access_codes: "B3",
    address: null,
    date_joined: "1674173987",
    fullname: "نام و نام خانوادگی",
    id: 4,
    last_login: "1674174006",
    phone: "09105753654",
    role: "admin",
    username: "ادمین۱",
  },
  {
    access_codes: null,
    address: null,
    date_joined: "1674174259",
    fullname: "علیرضا چناری",
    id: 5,
    last_login: "1674174834",
    phone: null,
    role: "assistant",
    username: "معاون۱",
  },
  {
    access_codes: null,
    address: null,
    date_joined: "1674174948",
    fullname: "vjkndfv",
    id: 6,
    last_login: "1674174963",
    phone: null,
    role: "assistant",
    username: "assisstant",
  },
]

const UsersTable = ({ searchKey, loading, refetch }) => {
  const fuse = new Fuse(data ?? [], {
    includeScore: true,
    keys: ["fullname", "address", "phone", "role"],
  })
  const result = fuse.search(searchKey).length
    ? fuse.search(searchKey).map((user) => user.item)
    : data

  const deleteUser = ({ id }) =>
    // axios.delete(`users/list/${id}/`).then(() => {
    message.success("کاربر با موفقیت حذف گردید.")
  // refetch()
  // })

  return (
    <>
      <Table
        columns={[
          { title: "ردیف", dataIndex: "id" },
          { title: "نام", dataIndex: "fullname" },
          {
            title: "نام کاربری",
            dataIndex: "username",
            render: (username, item) => (
              <Link to={`/users/info/${item.id}`}>{username}</Link>
            ),
          },
          {
            title: "نقش",
            dataIndex: "role",
            render: (role) => {
              switch (role) {
                case "manager":
                  return "مدیر کل"
                case "assistant":
                  return "معاون"
                case "admin":
                  return "ادمین"
                case "advisor":
                  return "مشاور"
                case "user":
                  return "کاربر"
                default:
                  return "مهمان"
              }
            },
          },
          { title: "شماره تلفن", dataIndex: "phone" },
          { title: "آدرس", dataIndex: "address" },
          {
            title: "تاریخ عضویت",
            dataIndex: "date_joined",
            render: (date) => dayjs(date * 1000).format("YYYY/MM/DD"),
          },
          {
            title: "اخرین ورود",
            dataIndex: "last_login",
            render: (date) => dayjs(date * 1000).format("HH:mm YYYY/MM/DD"),
          },
          {
            title: "عملیات",
            render: (_, render) => (
              <div className="action-buttons">
                <Popconfirm
                  title="آیا از حذف کاربر اطمینان دارید؟"
                  onConfirm={() => deleteUser(render)}
                  okText="بله"
                  cancelText="خیر"
                >
                  <Button icon={<DeleteOutlined className="delete-icon" />} />
                </Popconfirm>
                <Link to={`/users/edit/${render.id}`}>
                  <Button icon={<EditOutlined />} />
                </Link>
              </div>
            ),
          },
        ]}
        dataSource={result}
        rowKey="id"
        loading={loading}
        pagination={false}
        scroll={{ x: 1024 }}
      />
      <EditUserModal refetch={refetch} />
      <UserInfoModal />
    </>
  )
}

export default UsersTable
