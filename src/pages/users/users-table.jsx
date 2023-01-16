import React from "react"
import { Button, message, Popconfirm, Table } from "antd"
// import { useNavigate } from "react-router-dom"
import qs from "query-string"
import Fuse from "fuse.js"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import axios from "../../utils/axios"
import EditUserModal from "./edit-user-modal"

const data = [
  {
    key: "1",
    full_name: "محمدرضا",
    phone_number: "09123456789",
    email: "vlfv@vdf.vdf",
    national_code: "1234567890",
    province: "تهران",
    city: "تهران",
    postal_code: "1234567890",
    address: "تهران، خیابان شهید بهشتی، پلاک ۱۲۳",
  },
  {
    key: "2",
    full_name: "محمدرضا",
    phone_number: "09123456789",
    email: "vlfv@vdf.vdf",
    national_code: "1234567890",
    province: "تهران",
    city: "تهران",
    postal_code: "1234567890",
    address: "تهران، خیابان شهید بهشتی، پلاک ۱۲۳",
  },
]

const UsersTable = ({ searchKey }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  // const { data, refetch, isLoading } = useUsers()
  // const history = useHistory()
  // const navigate = useNavigate()
  // const { role } = JSON.parse(localStorage.getItem("user") || "{}")
  // const fuse = new Fuse(data ?? [], {
  //   keys: [
  //     "full_name",
  //     "email",
  //     "phone_number",
  //     "national_code",
  //     "city",~
  //     "province",
  //     "address",
  //     "postal_code",
  //   ],
  // })
  // const result = !searchKey ? data : fuse.search(searchKey || "")

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
          { title: "آدرس", dataIndex: "full_name" },
          { title: "شماره تلفن", dataIndex: "phone_number", className: "ltr" },
          { title: "کد", dataIndex: "email" },
          { title: "تاریخ", dataIndex: "national_code" },
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
        dataSource={data}
        // dataSource={
        //   !searchKey
        //     ? !Array.isArray(data)
        //       ? [data]
        //       : data
        //     : result.map(({ item }) => item)
        // }
        // rowKey="id"
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
