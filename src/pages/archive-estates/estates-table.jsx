import React from "react"
import { Button, message, Popconfirm, Table } from "antd"
import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons"
import EditEstateModal from "./edit-estate-modal"
import { useNavigate } from "react-router-dom"
import axios from "../../utils/axios"
import dayjs from "dayjs"

const EstatesTable = ({
  data,
  fullscreen,
  setFullscreen,
  refetch,
  loading,
}) => {
  const navigate = useNavigate()

  const deleteEstate = (id) =>
    axios.delete(`/estate/list/${id}/`).then(() => {
      message.success("ملک با موفقیت حذف شد")
      refetch()
    })

  const restoreEstate = (home) => {
    axios.post("/estate/restore-archived-home/", { home }).then(() => {
      message.success("ملک با موفقیت بازیابی شد")
      refetch()
    })
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
          { title: "ردیف", dataIndex: "id" },
          { title: "شماره تلفن", dataIndex: "owner_phone" },
          { title: "کد", dataIndex: "area_code" },
          {
            title: "تاریخ",
            dataIndex: "created_at",
            render: (date) => dayjs(date * 1000).format("YYYY/MM/DD"),
          },
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
                  onClick={() => navigate(`/archives/${estate.id}`)}
                />
                <Popconfirm
                  title="آیا از بازنشانی ملک اطمینان دارید؟"
                  onConfirm={() => restoreEstate(estate.id)}
                  okText="بله"
                  cancelText="خیر"
                >
                  <Button
                    icon={<ReloadOutlined style={{ color: "green" }} />}
                  />
                </Popconfirm>
              </div>
            ),
          },
        ]}
        dataSource={data}
        loading={loading}
        pagination={false}
        scroll={{ x: 1024 }}
      />
      <EditEstateModal
        onClose={() => navigate("/archives")}
        refetch={refetch}
      />
    </>
  )
}

export default EstatesTable
