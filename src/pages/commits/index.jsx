import { useState } from "react"
import { Button, Col, Row } from "antd"
import CommitsTable from "./commits-table"
import { AdminLayout } from "../../layouts"
import "./styles.scss"
import { useQuery } from "react-query"
import { getPendingEstates } from "../../api/estates"

const CommitsPage = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const { data, refetch, isLoading } = useQuery(
    "pending-estates",
    getPendingEstates
  )

  return (
    <AdminLayout>
      <div className="estates-page">
        <Row align="middle" justify="space-between" className="header">
          <Col sm={12} md={8} lg={8}>
            <Button type="primary" onClick={() => setFullscreen(true)}>
              نمایش تمام صفحه
            </Button>
          </Col>
        </Row>
        <CommitsTable
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          data={data}
          loading={isLoading}
          refetch={refetch}
        />
      </div>
    </AdminLayout>
  )
}

export default CommitsPage
