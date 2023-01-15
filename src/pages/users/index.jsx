import { useState } from "react"
import { Col, Input, Row } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import PeopleTable from "./users-table"
import { AdminLayout } from "../../layouts"
import "./styles.scss"

const UsersPage = () => {
  const [search, setSearch] = useState("")

  return (
    <AdminLayout>
      <div className="people-page">
        <Row align="middle" justify="space-between" className="header">
          <Col sm={12} md={12} lg={14}>
            <h1 className="title">لیست اشخاص</h1>
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
        <PeopleTable searchKey={search} />
      </div>
    </AdminLayout>
  )
}

export default UsersPage
