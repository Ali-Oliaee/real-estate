import { useState } from "react"
import { Button, Col, Popover, Row } from "antd"
import { FullscreenOutlined } from "@ant-design/icons"
import EstatesTable from "./estates-table"
import { AdminLayout } from "../../layouts"
import AddStateModal from "./add-estate-modal"
import { getEstates } from "../../api/estates"
import SearchBar from "./search-bar"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import "./styles.scss"

const EstatesPage = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")
  const { data, isLoading, refetch } = useQuery("estates", getEstates)
  const [search, setSearch] = useState()
  const navigate = useNavigate()

  return (
    <AdminLayout>
      <div className="estates-page">
        <Row align="middle" justify="space-between" className="header">
          <Col sm={12} md={8} lg={10}>
            <Popover
              placement="bottomRight"
              title="جستجوی پیشرفته"
              overlayClassName="search-bar"
              content={<SearchBar setData={setSearch} data={data} />}
              trigger="click"
            >
              <Button size="large">جستجوی پیشرفته</Button>
            </Popover>
          </Col>
          <Col
            sm={12}
            md={8}
            lg={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            {(role === "assistant" || role === "manager") && (
              <Button
                size="large"
                type="primary"
                className="add-button"
                onClick={() => navigate("/estates/add/")}
              >
                افزودن ملک +
              </Button>
            )}
            <Button
              size="large"
              type="ghost"
              onClick={() => setFullscreen(true)}
            >
              <FullscreenOutlined />
            </Button>
          </Col>
        </Row>
        <EstatesTable
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          data={search ?? data}
          loading={isLoading}
          refetch={refetch}
        />
      </div>
      <AddStateModal />
    </AdminLayout>
  )
}

export default EstatesPage
