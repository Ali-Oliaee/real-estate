import React from "react"
import { Button, message, Popconfirm, Table } from "antd"
// import { useHistory } from "react-router-dom"
import qs from "query-string"
import Fuse from "fuse.js"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
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

const EstatesTable = ({ searchKey }) => {
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
      columns={[
        { title: "ردیف", dataIndex: "key" },
        { title: "شماره تلفن", dataIndex: "phone_number", className: "ltr" },
        { title: "کد", dataIndex: "key" },
        { title: "تاریخ", dataIndex: "national_code" },
        { title: "مالک", dataIndex: "full_name" },
        { title: "خیابان", dataIndex: "city" },
        { title: "پلاک", dataIndex: "postal_code" },
        { title: "طبقات", dataIndex: "address" },
        {
          title: "متراژ",
          dataIndex: "address",
          sorter: (a, b) => a.address - b.address,
        },
        {
          title: "قیمت کل",
          dataIndex: "",
          sorter: (a, b) => a.address - b.address,
        },
        { title: "مشتری", dataIndex: "" },
        { title: "سبک", dataIndex: "" },
        { title: "مشتری", dataIndex: "" },
        { title: "گرمایش", dataIndex: "" },
        { title: "کف", dataIndex: "" },
        { title: "برق", dataIndex: "" },
        { title: "مطبخ", dataIndex: "" },
        { title: "شیرآلات", dataIndex: "" },
        { title: "و.ج", dataIndex: "" },
        { title: "پنجره", dataIndex: "" },
        {
          title: "توضیحات",
          dataIndex: "",
          filterMode: "tree",
          filterSearch: true,
          onFilter: (value, record) => record.name.indexOf(value) === 0,
        },
        {
          title: "عملیات",
          render: (_, render) => (
            <div className="action-buttons">
              <Popconfirm
                title="آیا از حذف ملک اطمینان دارید؟"
                // onConfirm={() => deleteUser(render)}
                okText="بله"
                cancelText="خیر"
              >
                <Button icon={<DeleteOutlined className="delete-icon" />} />
              </Popconfirm>
              <Button
                icon={<EditOutlined />}
                // onClick={() => editUser(render)}
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
  )
}

export default EstatesTable
