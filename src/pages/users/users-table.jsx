import React from "react"
import { Button, message, Popconfirm, Table } from "antd"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import axios from "../../utils/axios"
import Fuse from "fuse.js"
import { useHistory } from "react-router-dom"
import qs from "query-string"
import dayjs from "dayjs"

const UsersTable = ({ searchKey, data, loading, refetch }) => {
  const history = useHistory()
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
              <Button
                style={{ color: "#dda74f", textDecoration: "underline" }}
                type="link"
                onClick={() =>
                  history.push({
                    search: qs.stringify({
                      ...qs.parse(history.location.search),
                      mode: "info",
                      user_id: item.id,
                    }),
                  })
                }
              >
                {username}
              </Button>
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
            render: (date) =>
              date ? dayjs(date * 1000).format("HH:mm YYYY/MM/DD") : "_",
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
                <Button
                  icon={<EditOutlined />}
                  onClick={() =>
                    history.push({
                      search: qs.stringify({
                        ...qs.parse(history.location.search),
                        mode: "edit",
                        user_id: render.id,
                      }),
                    })
                  }
                />
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
    </>
  )
}

export default UsersTable
