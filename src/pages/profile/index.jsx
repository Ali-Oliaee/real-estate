import { Divider, Row, Spin } from "antd"
import { getUser } from "../../api/users"
import { useQuery } from "react-query"
import { AdminLayout } from "../../layouts"
import dayjs from "dayjs"
import "./styles.scss"

const ProfilePage = () => {
  const { id } = JSON.parse(localStorage.getItem("user"))
  const { data: user, isLoading } = useQuery("current-user", () => getUser(id))

  return (
    <AdminLayout>
      <div className="profile-page">
        <Spin size="large" spinning={isLoading}>
          <h2>اطلاعات حساب </h2>
          <Row align="middle" justify="start" wrap style={{ marginTop: 20 }}>
            <div className="item">
              <h4>نام و نام خانوادگی: </h4>
              <p>{user?.fullname ?? "-"}</p>
            </div>
            <div className="item">
              <h4>نام کاربری: </h4>
              <p>{user?.username ?? "-"}</p>
            </div>
            <div className="item">
              <h4>نقش: </h4>
              <p>{user?.role ?? "-"}</p>
            </div>
            <div className="item">
              <h4>شماره تلفن: </h4>
              <p>{user?.phone ?? "-"}</p>
            </div>
            <div className="item">
              <h4>آدرس: </h4>
              <p>{user?.address ?? "-"}</p>
            </div>
            <div className="item">
              <h4>سطح دسترسی: </h4>
              <p>{user?.access_codes ?? "-"}</p>
            </div>
            <div className="item">
              <h4>تاریخ عضویت: </h4>
              <p>
                {user && dayjs(user?.date_joined * 1000).format("YYYY/MM/DD")}
              </p>
            </div>
          </Row>
          <Divider />
          <h2>تاریخچه</h2>
        </Spin>
      </div>
    </AdminLayout>
  )
}

export default ProfilePage
