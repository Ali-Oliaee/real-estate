import { useState } from "react"
import { Button, Col, Input, Row } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { AdminLayout } from "../../layouts"
import { getUsers } from "../../api/users"
import qs from "query-string"
import { useHistory, useLocation } from "react-router-dom"
import { useQuery } from "react-query"
import PeopleTable from "./users-table"
import AddUserModal from "./add-user-modal"
import EditUserModal from "./edit-user-modal"
import UserInfoModal from "./user-info-modal"
import "./styles.scss"

const UsersPage = () => {
  const [search, setSearch] = useState("")
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")
  const { data, isLoading, refetch } = useQuery("users", () => getUsers())
  const history = useHistory()
  const location = useLocation()
  const onModalClose = () => {
    history.push({
      search: qs.exclude(location.search, ["mode"]),
    })
  }

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
                onClick={() =>
                  history.push({
                    search: qs.stringify({
                      ...qs.parse(history.location.search),
                      mode: "create",
                    }),
                  })
                }
              >
                افزودن شخص +
              </Button>
            </Col>
          )}
        </Row>
        <PeopleTable
          searchKey={search}
          data={data}
          loading={isLoading}
          refetch={refetch}
        />
      </div>
      <AddUserModal refetch={refetch} onClose={onModalClose} />
      <EditUserModal refetch={refetch} />
      <UserInfoModal />
    </AdminLayout>
  )
}

export default UsersPage
