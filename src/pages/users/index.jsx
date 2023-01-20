import { useState } from "react"
import { Button, Col, Input, Row } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import PeopleTable from "./users-table"
import { AdminLayout } from "../../layouts"
import { getUsers } from "../../api/users"
import { useQuery } from "react-query"
import AddUserModal from "./add-user-modal"
import "./styles.scss"

const UsersPage = () => {
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false)
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")
  // const { data, isLoading, refetch } = useQuery("users", () => getUsers())
  // console.log(data)

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
          {(role === "assistant" || role === "manager") && (
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
                onClick={() => setShowModal(true)}
              >
                افزودن شخص +
              </Button>
            </Col>
          )}
        </Row>
        <PeopleTable
          searchKey={search}
          // data={data}
          // loading={isLoading}
          // refetch={refetch}
        />
      </div>
      <AddUserModal
        // refetch={refetch}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </AdminLayout>
  )
}

export default UsersPage
