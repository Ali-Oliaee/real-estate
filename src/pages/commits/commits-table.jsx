import { Button, message, Popconfirm, Table } from "antd"
import { CheckCircleFilled, CloseOutlined } from "@ant-design/icons"
import axios from "../../utils/axios"
import "./styles.scss"

const data = [
  {
    area_code: "A2",
    bathtub: "",
    bottom: "",
    checked_by: null,
    checked_date: null,
    created_at: "1674172920",
    creator: 1,
    customer_name: "",
    date: "10/10",
    description: "خودشون میخان بفروشن",
    electricity: "",
    faucets: "",
    floors: "",
    heating: "",
    id: 40,
    is_archived: false,
    kitchen: "",
    meterage: 250,
    owner_name: " رامشینی",
    owner_phone: "",
    plaque: "00",
    price_per_meter: 60,
    status: true,
    street: "امامت 00",
    style: "",
    total_price: 15000,
    updated_at: "1674172920",
    window: "",
  },
  {
    area_code: "A2",
    bathtub: "",
    bottom: "",
    checked_by: null,
    checked_date: null,
    created_at: "1674172920",
    creator: 1,
    customer_name: "",
    date: "9/10",
    description: "دست مستاجره",
    electricity: "",
    faucets: "",
    floors: "",
    heating: "",
    id: 45,
    is_archived: false,
    kitchen: "",
    meterage: 250,
    owner_name: "رجبی",
    owner_phone: "",
    plaque: "00",
    price_per_meter: 60,
    status: true,
    street: "جلال 00",
    style: "",
    total_price: 15000,
    updated_at: "1674172920",
    window: "",
  },
]

const CommitsTable = ({
  // data,
  fullscreen,
  setFullscreen,
  loading,
  refetch,
}) => {
  const onClick = (id, status) =>
    // axios.post("/estate/change-status/", { home: id, status }).then(() => {
    status
      ? message.success("ملک با موفقیت تایید شد.")
      : message.success("ملک با موفقیت رد شد.")
  // refetch()
  // })

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
          { title: "ردیف", dataIndex: "id" },
          { title: "شماره تلفن", dataIndex: "owner_phone" },
          { title: "کد", dataIndex: "area_code" },
          { title: "تاریخ", dataIndex: "created_at" },
          { title: "مالک", dataIndex: "owner_name" },
          { title: "خیابان", dataIndex: "street" },
          { title: "پلاک", dataIndex: "plaque" },
          { title: "طبقات", dataIndex: "floors" },
          {
            title: "متراژ",
            dataIndex: "meterage",
            sorter: (a, b) => a.meterage - b.meterage,
          },
          {
            title: "قیمت متر مربع",
            dataIndex: "price_per_meter",
            sorter: (a, b) => a.cost - b.cost,
          },
          {
            title: "قیمت کل",
            dataIndex: "total_price",
            sorter: (a, b) => a.cost - b.cost,
          },
          { title: "مشتری", dataIndex: "customer_name" },
          { title: "سبک", dataIndex: "style" },
          { title: "گرمایش", dataIndex: "heating" },
          { title: "کف", dataIndex: "bottom" },
          { title: "برق", dataIndex: "electricity" },
          { title: "مطبخ", dataIndex: "kitchen" },
          { title: "شیرآلات", dataIndex: "faucets" },
          { title: "وان و جکوزی", dataIndex: "bathtub" },
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
            render: (text, record) => {
              return (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Popconfirm
                    title="آیا از رد این ملک اطمینان دارید؟"
                    onConfirm={() => onClick(record.id, false)}
                  >
                    <Button
                      type="ghost"
                      icon={<CloseOutlined style={{ color: "red" }} />}
                    />
                  </Popconfirm>
                  <Button
                    onClick={() => onClick(record.id, true)}
                    type="ghost"
                    icon={<CheckCircleFilled style={{ color: "green" }} />}
                  />
                </div>
              )
            },
          },
        ]}
        dataSource={data}
        rowKey="id"
        loading={loading}
        pagination={false}
        scroll={{ x: 1024 }}
      />
    </>
  )
}

export default CommitsTable
