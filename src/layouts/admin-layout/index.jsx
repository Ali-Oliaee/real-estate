import { Layout } from "antd"
import { SideMenu } from "../../components"
import "./styles.scss"

const AdminLayout = ({ children }) => {
  return (
    <Layout className="admin-layout-container">
      <SideMenu />
      <Layout className="admin-layout" style={{ minHeight: "100%" }}>
        <Layout.Content className="content">{children}</Layout.Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
