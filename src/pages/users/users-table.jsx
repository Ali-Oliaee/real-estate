import React from "react"
import { Button, message, Popconfirm, Table } from "antd"
import qs from "query-string"
import Fuse from "fuse.js"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import axios from "../../utils/axios"
import EditUserModal from "./edit-user-modal"

const data = [
  {
    key: "1",
    full_name: "محمد محمدی",
    phone_number: "09123456789",
    email: "vlfv@vdf.vdf",
    date: "۱۳۹۹/۰۱/۰۱",
    role: "مدیر",
    address: "تهران، خیابان شهید بهشتی، پلاک ۱۲۳",
  },
  {
    key: "2",
    full_name: "سینا موسوی",
    role: "کاربر",
    phone_number: "09123456789",
    email: "vlfv@vdf.vdf",
    date: "۱۳۹۹/۰۱/۲۱",
    address: "تهران، خیابان شهید بهشتی، پلاک ۱۲۳",
  },
  {
    key: "3",
    full_name: "سینا موسوی",
    role: "کاربر",
    phone_number: "09123456789",
    email: "vlfv@vdf.vf",
    date: "۱۳۹۹/۰۱/۲۱",
    address: "تهران، خیابان شهید بهشتی، پلاک ۱۲۳",
  },
  {
    key: "4",
    full_name: "زهرا حسینی",
    role: "تایید کننده",
    phone_number: "09123456789",
    email: "vlfv@vdf.vdf",
    date: "۱۳۹۹/۰۱/۲۱",
    address: "مشهد، خیابان اقبالی، پلاک ۱۲۳",
  },
]

const UsersTable = ({ searchKey }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  // const { data, refetch, isLoading } = useUsers()
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")
  const fuse = new Fuse(data ?? [], {
    keys: ["full_name", "phone_number", "email", "role", "address"],
  })
  const result = !searchKey ? data : fuse.search(searchKey || "")

  // const deleteUser = ({ id }) =>
  //   axios.delete(`panel/users/${id}/`).then(() => {
  //     message.success("کاربر با موفقیت حذف گردید.")
  //     // refetch()
  //   })

  const editUser = ({ id }) => {
    setIsModalVisible(true)

    // navigate.push({
    //   search: qs.stringify({
    //     ...qs.parse(navigate.location.search),
    //     user_id: id,
    //   }),
    // })
  }

  return (
    <>
      <Table
        columns={[
          { title: "ردیف", dataIndex: "key" },
          { title: "نام", dataIndex: "full_name" },
          { title: "نقش", dataIndex: "role" },
          { title: "شماره تلفن", dataIndex: "phone_number", className: "ltr" },
          { title: "ایمیل", dataIndex: "email" },
          { title: "آدرس", dataIndex: "address" },
          { title: "تاریخ عضویت", dataIndex: "date" },
          {
            title: "عملیات",
            render: (_, render) => (
              <div className="action-buttons">
                <Popconfirm
                  title="آیا از حذف کاربر اطمینان دارید؟"
                  // onConfirm={() => deleteUser(render)}
                  okText="بله"
                  cancelText="خیر"
                >
                  <Button icon={<DeleteOutlined className="delete-icon" />} />
                </Popconfirm>
                <Button
                  icon={<EditOutlined />}
                  onClick={() => editUser(render)}
                />
              </div>
            ),
          },
        ]}
        dataSource={
          !searchKey
            ? !Array.isArray(data)
              ? [data]
              : data
            : result.map(({ item }) => item)
        }
        rowKey="id"
        // loading={isLoading}
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
