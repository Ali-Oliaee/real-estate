import React from "react"
import { Button, message, Popconfirm, Table } from "antd"
import qs from "query-string"
import Fuse from "fuse.js"
import {
  CloseOutlined,
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons"
import EditEstateModal from "./edit-estate-modal"
// import { axios } from "../../utils"

const data = [
  {
    key: "1",
    full_name: "محمدرضا شریفی",
    phone_number: "09123456789",
    code: "A2",
    date: "1399/12/12",
    street: "خیابان شهید بهشتی",
    houseNumber: "12",
    floors: "4",
    meterage: "120",
    cost: "1240",
    customer: "سینا موسوی",
    type: "مدرن",
    heating: "گاز",
    floor: "پارکت",
    electric: "ندارد",
    kitchen: "اپن",
    faucets: "استیل",
    vg: "ندارد",
    window: "پنجره",
    description: "توضیحات",
  },
  {
    key: "2",
    full_name: "محمدرضا شریفی",
    phone_number: "09123456789",
    code: "A2",
    date: "1399/12/12",
    street: "خیابان شهید بهشتی",
    houseNumber: "12",
    floors: "4",
    meterage: "100",
    cost: "1200",
    customer: "سینا موسوی",
    type: "مدرن",
    heating: "گاز",
    floor: "پارکت",
    electric: "ندارد",
    kitchen: "اپن",
    faucets: "استیل",
    vg: "ندارد",
    window: "پنجره",
    description: "توضیحات",
  },
  {
    key: "3",
    full_name: "محمدرضا شریفی",
    phone_number: "09123456789",
    code: "A2",
    date: "1399/12/12",
    street: "خیابان شهید بهشتی",
    houseNumber: "12",
    floors: "4",
    meterage: "60",
    cost: "700",
    customer: "سینا موسوی",
    type: "مدرن",
    heating: "گاز",
    floor: "پارکت",
    electric: "ندارد",
    kitchen: "اپن",
    faucets: "استیل",
    vg: "ندارد",
    window: "پنجره",
    description: "توضیحات",
  },
]

const EstatesTable = ({ searchKey, fullscreen, setFullscreen }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")
  // const { data, refetch, isLoading } = useUsers()
  const fuse = new Fuse(data ?? [], {
    keys: ["full_name", "phone_number", "code", "date", "street"],
  })
  const result = !searchKey ? data : fuse.search(searchKey || "")

  // const deleteUser = ({ id }) =>
  //   axios.delete(`panel/users/${id}/`).then(() => {
  //     message.success("کاربر با موفقیت حذف گردید.")
  //     refetch()
  //   })

  const editUser = ({ id }) => {
    setIsModalVisible(true)
    // history.push({
    //   search: qs.stringify({
    //     ...qs.parse(history.location.search),
    //     user_id: id,
    //   }),
    // })
  }

  return (
    <>
      {fullscreen && (
        <Button
          type="ghost"
          className="exit-fullscreen-button"
          onClick={() => setFullscreen(false)}
        >
          <CloseOutlined />
        </Button>
      )}
      <Table
        className={fullscreen && "fullscreen-table"}
        columns={[
          {
            title: "ردیف",
            dataIndex: "key",
            render: (text, record, index) =>
              role !== "user" ? (
                text
              ) : (
                <Button onClick={() => editUser(record)} type="link">
                  {<CommentOutlined />}
                  {text}
                </Button>
              ),
          },
          { title: "شماره تلفن", dataIndex: "phone_number", className: "ltr" },
          { title: "کد", dataIndex: "code" },
          { title: "تاریخ", dataIndex: "date" },
          { title: "مالک", dataIndex: "full_name" },
          { title: "خیابان", dataIndex: "street" },
          { title: "پلاک", dataIndex: "houseNumber" },
          { title: "طبقات", dataIndex: "floors" },
          {
            title: "متراژ",
            dataIndex: "meterage",
            sorter: (a, b) => a.meterage - b.meterage,
          },
          {
            title: "قیمت کل",
            dataIndex: "cost",
            sorter: (a, b) => a.cost - b.cost,
          },
          { title: "مشتری", dataIndex: "customer" },
          { title: "سبک", dataIndex: "type" },
          { title: "گرمایش", dataIndex: "heating" },
          { title: "کف", dataIndex: "floor" },
          { title: "برق", dataIndex: "electric" },
          { title: "مطبخ", dataIndex: "kitchen" },
          { title: "شیرآلات", dataIndex: "faucets" },
          { title: "و.ج", dataIndex: "vg" },
          { title: "پنجره", dataIndex: "window" },
          {
            title: "توضیحات",
            dataIndex: "description",
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
                  onClick={() => editUser(render)}
                />
              </div>
            ),
            hidden: role === "user",
          },
        ].filter((item) => !item.hidden)}
        // dataSource={data}
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
      <EditEstateModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  )
}

export default EstatesTable
