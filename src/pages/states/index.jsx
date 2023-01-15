import { useState } from "react"
import { Input, Tabs } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import StatesTable from "./states-table"
import { AdminLayout } from "../../layouts"
import "./styles.scss"

const StatesPage = () => {
  const [search, setSearch] = useState("")

  return (
    <AdminLayout>
      <div className="states-page">
        <Tabs
          type="card"
          className="tables-tab-bar"
          tabBarExtraContent={{
            left: (
              <Input
                placeholder="جستجوی ملک"
                onChange={(e) => setSearch(e.target.value)}
                size="middle"
                suffix={<SearchOutlined />}
                className="search-input"
              />
            ),
          }}
        >
          <Tabs.TabPane tab="لیست املاک" key="states">
            <StatesTable searchKey={search} />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  )
}

export default StatesPage
