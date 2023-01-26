import React from "react"
import { Button, message, Popconfirm, Table } from "antd"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import axios from "../../utils/axios"
import Fuse from "fuse.js"
import { Link } from "react-router-dom"
import EditUserModal from "./edit-user-modal"
import dayjs from "dayjs"
import UserInfoModal from "./user-info-modal"

const UsersTable = ({ searchKey, data, loading, refetch }) => {
  const fuse = new Fuse(data ?? [], {
    includeScore: true,
    keys: ["fullname", "address", "phone", "role"],
  })
  const result = fuse.search(searchKey).length
    ? fuse.search(searchKey).map((user) => user.item)
    : data

  const deleteUser = ({ id }) =>
    axios.delete(`users/list/${id}/`).then(() => {
      message.success("کاربر با موفقیت حذف گردید.")
      refetch()
    })

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
              <Link
                to={`/users/info/${item.id}`}
                style={{ color: "#dda74f", textDecoration: "underline" }}
              >
                {username}
              </Link>
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
                  <Button icon={<DeleteOutlined />} />
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
