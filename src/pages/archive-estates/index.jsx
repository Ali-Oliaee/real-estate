import { useState } from "react"
import { Button, Col, Popover, Row } from "antd"
import { FullscreenOutlined } from "@ant-design/icons"
import { AdminLayout } from "../../layouts"
import { getArchiveEstates } from "../../api/estates"
import { useQuery } from "react-query"
import EstatesTable from "./estates-table"
import SearchBar from "./search-bar"
import qs from "query-string"
import { useLocation, useHistory } from "react-router"
import EditEstateModal from "./edit-estate-modal"
import "./styles.scss"

const ArchiveEstates = () => {
  const location = useLocation()
  const history = useHistory()
  const [fullscreen, setFullscreen] = useState(false)
  const { data, isLoading, refetch } = useQuery(
    "archive-estates",
    getArchiveEstates
  )

  return (
    <AdminLayout>
      <div className="estates-page">
        <Row align="middle" justify="space-between" className="header">
          <Col sm={12} md={8} lg={10}>
            <Popover
              placement="bottomRight"
              title="جستجوی پیشرفته"
              overlayClassName="search-bar"
              content={<SearchBar />}
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
            <Button
              size="large"
              type="primary"
              onClick={() => setFullscreen(true)}
            >
              <FullscreenOutlined />
            </Button>
          </Col>
        </Row>
        <EstatesTable
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          data={data}
          loading={isLoading}
          refetch={refetch}
        />
      </div>
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

export default ArchiveEstates
