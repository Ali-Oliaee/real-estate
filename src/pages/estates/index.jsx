import { useState } from "react"
import { Button, Col, Input, Row } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import EstatesTable from "./estates-table"
import { AdminLayout } from "../../layouts"
import AddStateModal from "./add-estate-modal"
import "./styles.scss"

const EstatesPage = () => {
  const [search, setSearch] = useState("")
  const [addModal, setAddModal] = useState(false)
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")

  return (
    <AdminLayout>
      <div className="states-page">
        <Row align="middle" justify="space-between" className="header">
          <Col sm={12} md={8} lg={10}>
            <Input
              placeholder="جستجو بر اساس مالک، شماره تماس، آدرس و ..."
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
                  onClick={() => setAddModal(true)}
                >
                  افزودن ملک +
                </Button>
              </Col>
            ))}
        </Row>
        <EstatesTable searchKey={search} />
      </div>
      <AddStateModal isOpen={addModal} onClose={() => setAddModal(false)} />
    </AdminLayout>
  )
}

export default EstatesPage
