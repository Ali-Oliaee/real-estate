import { useState } from "react"
import { Button, Col, Popover, Row } from "antd"
import { FullscreenOutlined } from "@ant-design/icons"
import EstatesTable from "./estates-table"
import { AdminLayout } from "../../layouts"
import AddStateModal from "./add-estate-modal"
import { useHistory, useLocation } from "react-router-dom"
import { getEstates } from "../../api/estates"
import SearchBar from "./search-bar"
import qs from "query-string"
import { useQuery } from "react-query"
import EditEstateModal from "./edit-estate-modal"
import "./styles.scss"

const EstatesPage = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const history = useHistory()
  const location = useLocation()
  const { role } = JSON.parse(localStorage.getItem("user") || "{}")
  const onModalClose = () => {
    history.push({
      search: qs.exclude(location.search, ["mode"]),
    })
  }

  const { data, isLoading, refetch } = useQuery("estates", getEstates, {
    staleTime: Infinity,
    cacheTime: 0,
  })
  const [search, setSearch] = useState()

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
              <Button type="primary" size="large">
                جستجوی پیشرفته
              </Button>
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
                onClick={() =>
                  history.push({
                    search: qs.stringify({
                      ...qs.parse(history.location.search),
                      mode: "create",
                    }),
                  })
                }
              >
                افزودن ملک +
              </Button>
            )}
            <Button
              size="large"
              type="ghost"
              className="full-screen-button"
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
      <AddStateModal onClose={onModalClose} refetch={refetch} />
      <EditEstateModal
        onClose={() =>
          history.push({
            search: qs.exclude(location.search, ["mode", "estate_id"]),
          })
        }
        refetch={refetch}
      />
    </AdminLayout>
  )
}

export default EstatesPage
