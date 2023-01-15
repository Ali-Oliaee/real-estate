import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Button, Popconfirm } from "antd"

const columns = [
  { title: "نام", dataIndex: "full_name" },
  { title: "شماره تلفن", dataIndex: "phone_number", className: "ltr" },
  { title: "ایمیل", dataIndex: "email" },
  { title: "کد ملی", dataIndex: "national_code" },
  { title: "استان", dataIndex: "province" },
  { title: "شهر", dataIndex: "city" },
  { title: "کد پستی", dataIndex: "postal_code" },
  { title: "آدرس", dataIndex: "address" },
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
          // onClick={() => editUser(render)}
        />
      </div>
    ),
  },
]

export default columns
