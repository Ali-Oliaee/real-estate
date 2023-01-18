import React from "react"
import { Button, Input, message, Popconfirm, Table } from "antd"
import { CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons"
import EditEstateModal from "./edit-estate-modal"
import { useNavigate } from "react-router-dom"
import axios from "../../utils/axios"

const EstatesTable = ({
  data,
  fullscreen,
  setFullscreen,
  refetch,
  loading,
}) => {
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")
  const navigate = useNavigate()
  const saveDescription = (home, description) =>
    axios.post("/estate/set-description/", { home, description }).then(() => {
      message.success("توضیحات ذخیره شد")
      refetch()
    })

  const deleteEstate = (id) =>
    axios.delete(`/estate/list/${id}/`).then(() => {
      message.success("ملک با موفقیت حذف شد")
      refetch()
    })

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
            sorter: (a, b) => a.price_per_meter - b.price_per_meter,
          },
          {
            title: "قیمت کل",
            dataIndex: "total_price",
            sorter: (a, b) => a.total_price - b.total_price,
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
            render: (description, item) =>
              role === "user" ? (
                <Input
                  bordered={false}
                  style={{ width: 150 }}
                  defaultValue={description}
                  placeholder="توضیحات"
                  onBlur={(e) => saveDescription(item.id, e.target.value)}
                />
              ) : (
                description
              ),
          },
          {
            title: "عملیات",
            render: (estate) => (
              <div className="action-buttons">
                <Popconfirm
                  title="آیا از حذف ملک اطمینان دارید؟"
                  onConfirm={() => deleteEstate(estate.id)}
                  okText="بله"
                  cancelText="خیر"
                >
                  <Button icon={<DeleteOutlined className="delete-icon" />} />
                </Popconfirm>
                <Button
                  icon={<EditOutlined />}
                  onClick={() => navigate(`/estates/${estate.id}`)}
                />
              </div>
            ),
            hidden: role === "user" || role === "admin",
          },
        ].filter((item) => !item.hidden)}
        dataSource={data}
        loading={loading}
        pagination={false}
        scroll={{ x: 1024 }}
      />
      <EditEstateModal onClose={() => navigate("/estates")} />
    </>
  )
}

export default EstatesTable
