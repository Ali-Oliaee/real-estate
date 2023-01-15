import { useState } from "react"
import { Col, Input, Row } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import CommitsTable from "./commits-table"
import { AdminLayout } from "../../layouts"
import "./styles.scss"

const CommitsPage = () => {
  const [search, setSearch] = useState("")

  return (
    <AdminLayout>
      <div className="states-page">
        <Row align="middle" justify="space-between" className="header">
          <Col sm={6} md={8} lg={12}>
            <h1 className="title">لیست املاک</h1>
          </Col>
          <Col sm={12} md={8} lg={8}>
            <Input
              placeholder="جستجو"
              size="large"
              suffix={<SearchOutlined />}
              onChange={({ target: { value } }) => setSearch(value)}
            />
          </Col>
        </Row>
        <CommitsTable searchKey={search} />
      </div>
    </AdminLayout>
  )
}

export default CommitsPage
