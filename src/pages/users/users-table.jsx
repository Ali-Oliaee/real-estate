import React from "react"
import { Button, message, Popconfirm, Table } from "antd"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import axios from "../../utils/axios"
import Fuse from "fuse.js"
import { Link } from "react-router-dom"
import EditUserModal from "./edit-user-modal"
import dayjs from "dayjs"

const UsersTable = ({ searchKey, data, loading, refetch }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")

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
          { title: "نام کاربری", dataIndex: "username" },
          { title: "نقش", dataIndex: "role" },
          { title: "شماره تلفن", dataIndex: "phone" },
          { title: "آدرس", dataIndex: "address" },
          { title: "تاریخ عضویت", dataIndex: "date_joined" },
          {
            title: "اخرین ورود",
            dataIndex: "last_login",
            render: (date) => {
              return date && dayjs(data).format("YYYY/MM/DD")
            },
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
                <Link to={`/users/${render.id}`}>
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => setIsModalVisible(true)}
                  ></Button>
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
      <EditUserModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  )
}

export default UsersTable
