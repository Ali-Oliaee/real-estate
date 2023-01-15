import React from "react"
import { Button, message, Popconfirm, Table } from "antd"
// import { useHistory } from "react-router-dom"
import qs from "query-string"
import Fuse from "fuse.js"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
// import { useUsers } from "../../hooks"
// import { axios } from "../../utils"

const data = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
]
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
]

const StatesTable = ({ searchKey }) => {
  // const { data, refetch, isLoading } = useUsers()
  // const history = useHistory()
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")
  // const fuse = new Fuse(data ?? [], {
  //   keys: [
  //     "full_name",
  //     "email",
  //     "phone_number",
  //     "national_code",
  //     "city",
  //     "province",
  //     "address",
  //     "postal_code",
  //   ],
  // })
  // const result = !searchKey ? data : fuse.search(searchKey || "")

  // const deleteUser = ({ id }) =>
  //   axios.delete(`panel/users/${id}/`).then(() => {
  //     message.success("کاربر با موفقیت حذف گردید.")
  //     refetch()
  //   })

  // const editUser = ({ id }) =>
  //   history.push({
  //     search: qs.stringify({
  //       ...qs.parse(history.location.search),
  //       user_id: id,
  //     }),
  //   })

  return (
    <Table
      // columns={[
      //   { title: "نام", dataIndex: "full_name" },
      //   { title: "شماره تلفن", dataIndex: "phone_number", className: "ltr" },
      //   { title: "ایمیل", dataIndex: "email" },
      //   { title: "کد ملی", dataIndex: "national_code" },
      //   { title: "استان", dataIndex: "province" },
      //   { title: "شهر", dataIndex: "city" },
      //   { title: "کد پستی", dataIndex: "postal_code" },
      //   { title: "آدرس", dataIndex: "address" },
      //   {
      //     title: "عملیات",
      //     render: (_, render) => (
      //       <div className="action-buttons">
      //         <Popconfirm
      //           title="آیا از حذف کاربر اطمینان دارید؟"
      //           // onConfirm={() => deleteUser(render)}
      //           okText="بله"
      //           cancelText="خیر"
      //         >
      //           <Button icon={<DeleteOutlined className="delete-icon" />} />
      //         </Popconfirm>
      //         <Button
      //           icon={<EditOutlined />}
      //           // onClick={() => editUser(render)}
      //         />
      //       </div>
      //     ),
      //     hidden: role !== "admin",
      //   },
      // ].filter((el) => !el.hidden)}
      columns={columns}
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
  )
}

export default StatesTable
