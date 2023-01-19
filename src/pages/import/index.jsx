import { CheckOutlined, CloseOutlined } from "@ant-design/icons"
import { useState } from "react"
import { AdminLayout } from "../../layouts"
import { Button, Col, message, Row, Upload } from "antd"
import axios from "../../utils/axios"

const ImportDataPage = () => {
  const [loading, setLoading] = useState(false)
  const [exel, setExel] = useState()

  const sendExel = () => {
    setLoading(true)
    const formData = new FormData()
    formData.append("file", exel)
    console.log(exel)
    axios
      .post("/estate/import-excel/", formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then(() => {
        message.success("اطلاعات با موفقیت اضافه شدند")
      })
      .finally(() => setLoading(false))
  }

  return (
    <AdminLayout>
      <Row>
        <Col span={24}>
          <Upload
            accept=".xlsx"
            showUploadList={false}
            onChange={({ file }) => setExel(file.originFileObj)}
          >
            <Button>Click to Upload</Button>
          </Upload>
          {exel && (
            <div
              style={{
                width: "100%",
                maxHeight: 600,
                display: "flex",
                marginTop: 40,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h5>فایل وارد شده به انتهای لیست املاک اضافه خواهد شد! </h5>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  icon={<CheckOutlined />}
                  type="primary"
                  style={{ margin: 10, minWidth: 160 }}
                  onClick={sendExel}
                  loading={loading}
                >
                  ثبت اطلاعات
                </Button>
                <Button
                  icon={<CloseOutlined style={{ color: "red" }} />}
                  style={{
                    margin: 10,
                    minWidth: 160,
                    border: "1px solid red",
                    color: "red",
                  }}
                  onClick={() => {
                    setExel(null)
                    setLoading(false)
                  }}
                >
                  انصراف
                </Button>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </AdminLayout>
  )
}

export default ImportDataPage
