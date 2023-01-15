import React from "react"
import { Button, message, Popconfirm, Table } from "antd"
// import { useHistory } from "react-router-dom"
import qs from "query-string"
import Fuse from "fuse.js"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import columns from "./table-columns"
// import { axios } from "../../utils"

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
