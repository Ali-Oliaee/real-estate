import { useState } from "react"
import { Input, Tabs } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import StatesTable from "./states-table"
import { AdminLayout } from "../../layouts"
import "./styles.scss"

const HomePage = () => {
  const [search, setSearch] = useState("")

  return (
    <AdminLayout>
      <Tabs
        type="card"
        className="tables-tab-bar"
        tabBarExtraContent={{
          left: (
            <Input
              placeholder="جستجو ملک"
              onChange={(e) => setSearch(e.target.value)}
              size="middle"
              suffix={<SearchOutlined />}
              className="search-input"
            />
          ),
        }}
      >
        <Tabs.TabPane tab="لیست املاک" key="users">
          <StatesTable searchKey={search} />
        </Tabs.TabPane>
      </Tabs>
    </AdminLayout>
  )
}

export default HomePage
