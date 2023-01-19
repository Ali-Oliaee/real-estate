import { CheckOutlined, CloseOutlined, InboxOutlined } from "@ant-design/icons"
import Dragger from "antd/es/upload/Dragger"
import { OutTable, ExcelRenderer } from "react-excel-renderer"
import { useState } from "react"
import { AdminLayout } from "../../layouts"
import { Button, Col, Row } from "antd"

const ImportDataPage = () => {
  const [exel, setExel] = useState({ cols: [], rows: [] })

  const fileHandler = (file) => {
    ExcelRenderer(file, (err, resp) => {
      if (err) {
        console.log(err)
      } else {
        setExel({
          cols: resp.cols,
          rows: resp.rows,
        })
      }
    })
  }

  return (
    <AdminLayout>
      <Row>
        <Col span={exel.rows.length ? 12 : 24}>
          <Dragger
            style={{ maxHeight: 200 }}
            multiple={false}
            name="file"
            maxCount={1}
            showUploadList={false}
            accept=".xlsx, .xls, .csv"
            onChange={(info) => fileHandler(info.file.originFileObj)}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              فایل خود را اینجا بکشید و رها کنید
            </p>
            <p className="ant-upload-hint">پشتیبانی از فایل های Exel و csv</p>
          </Dragger>
        </Col>
        {!!exel.rows.length && (
          <Col span={12}>
            <div
              style={{
                width: "100%",
                overflow: "auto",
                maxHeight: 600,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h5>فایل وارد شده به انتهای لیست املاک اضافه خواهد شد! </h5>
              <div className="buttons">
                <Button
                  icon={<CheckOutlined />}
                  type="primary"
                  style={{ margin: 10, minWidth: 160 }}
                  onClick={() => console.log(exel)}
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
                  onClick={() => setExel({ cols: [], rows: [] })}
                >
                  انصراف
                </Button>
              </div>
            </div>
          </Col>
        )}
      </Row>
      <div style={{ width: "100%", overflow: "auto", maxHeight: 600 }}>
        <OutTable
          data={exel.rows}
          columns={exel.cols}
          tableHeaderRowClass="heading"
        />
      </div>
    </AdminLayout>
  )
}

export default ImportDataPage
