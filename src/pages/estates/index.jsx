import { useState } from "react"
import { Button, Col, Input, Popover, Row } from "antd"
import { FullscreenOutlined, SearchOutlined } from "@ant-design/icons"
import EstatesTable from "./estates-table"
import { AdminLayout } from "../../layouts"
import AddStateModal from "./add-estate-modal"
import "./styles.scss"
import SearchBar from "./search-bar"

const EstatesPage = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const [search, setSearch] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")

  return (
    <AdminLayout>
      <div className="estates-page">
        <Row align="middle" justify="space-between" className="header">
          <Col sm={12} md={8} lg={10}>
            {/* <Input
              placeholder="جستجو بر اساس مالک، شماره تماس، آدرس و ..."
              size="large"
              suffix={<SearchOutlined />}
              onChange={({ target: { value } }) => setSearch(value)}
            /> */}
            <Popover
              placement="bottomRight"
              title="جستجوی پیشرفته"
              overlayClassName="search-bar"
              content={<SearchBar />}
              trigger="click"
              onOpenChange={(open) => setSearch(open)}
            >
              <Button size="large">جستجوی پیشرفته</Button>
            </Popover>
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
          <Button size="large" type="ghost" onClick={() => setFullscreen(true)}>
            <FullscreenOutlined />
          </Button>
        </Row>
        <EstatesTable fullscreen={fullscreen} setFullscreen={setFullscreen} />
      </div>
      <AddStateModal isOpen={addModal} onClose={() => setAddModal(false)} />
    </AdminLayout>
  )
}

export default EstatesPage
