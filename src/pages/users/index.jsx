import { useState } from "react"
import { Button, Col, Input, Row } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import PeopleTable from "./users-table"
import { AdminLayout } from "../../layouts"
import "./styles.scss"
import AddUserModal from "./add-user-modal"

const UsersPage = () => {
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [search, setSearch] = useState("")
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")

  return (
    <AdminLayout>
      <div className="people-page">
        <Row align="middle" justify="space-between" className="header">
          <Col sm={12} md={8} lg={8}>
            <Input
              placeholder="جستجو براساس نام،‌ شماره تلفن، آدرس و ..."
              size="large"
              suffix={<SearchOutlined />}
              onChange={({ target: { value } }) => setSearch(value)}
            />
          </Col>
          {role === "admin" ||
            (role === "manager" && (
              <Col
                sm={12}
                md={8}
                lg={12}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  size="large"
                  type="primary"
                  className="add-button"
                  onClick={() => setAddModalOpen(true)}
                >
                  افزودن شخص +
                </Button>
              </Col>
            ))}
        </Row>
        <PeopleTable searchKey={search} />
      </div>
      <AddUserModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
      />
    </AdminLayout>
  )
}

export default UsersPage
