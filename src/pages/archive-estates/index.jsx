import { useState } from "react"
import { Button, Col, Popover, Row } from "antd"
import { FullscreenOutlined } from "@ant-design/icons"
import { AdminLayout } from "../../layouts"
import { getArchiveEstates } from "../../api/estates"
import { useQuery } from "react-query"
import EstatesTable from "./estates-table"
import SearchBar from "./search-bar"
import "./styles.scss"

const data = [
  {
    area_code: "A2",
    bathtub: "",
    bottom: "",
    checked_by: null,
    checked_date: null,
    created_at: "1674172920",
    creator: 1,
    customer_name: "",
    date: "10/10",
    description: "خودشون میخان بفروشن",
    electricity: "",
    faucets: "",
    floors: "",
    heating: "",
    id: 40,
    is_archived: false,
    kitchen: "",
    meterage: 250,
    owner_name: " رامشینی",
    owner_phone: "",
    plaque: "00",
    price_per_meter: 60,
    status: true,
    street: "امامت 00",
    style: "",
    total_price: 15000,
    updated_at: "1674172920",
    window: "",
  },
  {
    area_code: "A2",
    bathtub: "",
    bottom: "",
    checked_by: null,
    checked_date: null,
    created_at: "1674172920",
    creator: 1,
    customer_name: "",
    date: "9/10",
    description: "دست مستاجره",
    electricity: "",
    faucets: "",
    floors: "",
    heating: "",
    id: 45,
    is_archived: false,
    kitchen: "",
    meterage: 250,
    owner_name: "رجبی",
    owner_phone: "",
    plaque: "00",
    price_per_meter: 60,
    status: true,
    street: "جلال 00",
    style: "",
    total_price: 15000,
    updated_at: "1674172920",
    window: "",
  },
]

const ArchiveEstates = () => {
  const [fullscreen, setFullscreen] = useState(false)
  // const { data, isLoading, refetch } = useQuery(
  //   "archive-estates",
  //   getArchiveEstates
  // )

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
              <Button size="large">جستجوی پیشرفته</Button>
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
          data={data}
          // loading={isLoading}
          // refetch={refetch}
        />
      </div>
    </AdminLayout>
  )
}

export default ArchiveEstates
