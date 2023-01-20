import { Col, Divider, Row, Spin } from "antd"
import { getUser, getUserHistory } from "../../api/users"
import { useQuery } from "react-query"
import { AdminLayout } from "../../layouts"
import dayjs from "dayjs"
import "./styles.scss"

const ProfilePage = () => {
  const { id } = JSON.parse(localStorage.getItem("user"))
  // const { data: user, isLoading } = useQuery("current-user", () => getUser(id))
  // const { data: history } = useQuery("user-history", getUserHistory)
  const user = {
    fullname: "محمد محمدی",
    username: "mohammad",
    role: "manager",
    phone: "09123456789",
    address: "تهران",
    access_codes: "B2",
    date_joined: 1610000000,
  }

  return (
    <AdminLayout>
      <div className="profile-page">
        {/* <Spin size="large" spinning={isLoading}> */}
        <Spin size="large" spinning={false}>
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
              <p>
                {user?.role === "manager"
                  ? "مدیر"
                  : user?.role === "assistant"
                  ? "معاون"
                  : user?.role === "admin"
                  ? "ادمین"
                  : user?.role === "advisor"
                  ? "مشاور"
                  : user?.role === "user"
                  ? "کاربر"
                  : "-"}
              </p>
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
          <h2 style={{ marginBottom: 20 }}>تاریخچه</h2>
          <Row wrap justify="space-between">
            <Col span={24}>
              {[1].map((item) => {
                switch (item.title) {
                  case "create-user":
                    return (
                      <Row align="middle" justify="start" key={item.id}>
                        <Col span={24}>
                          کاربر {item.low_user.username || "deleted Account "}{" "}
                          توسط {item?.up_user?.username} ساخته شد.
                          <Row style={{ fontSize: "0.7em", marginTop: 10 }}>
                            {dayjs(item.created_at * 1000).format("YYYY/MM/DD")}
                          </Row>
                        </Col>
                        <Divider />
                      </Row>
                    )
                  case "update-user":
                    return (
                      <Row align="middle" justify="start" key={item.id}>
                        <Col span={24}>
                          اطلاعات کاربر{" "}
                          {item.low_user.username || "deleted Account "} توسط{" "}
                          {item?.up_user?.username} به روز رسانی شد.
                          <Row style={{ fontSize: "0.9em", marginTop: 10 }}>
                            {item.description}
                          </Row>
                          <Row style={{ fontSize: "0.7em", marginTop: 10 }}>
                            {dayjs(item.created_at * 1000).format("YYYY/MM/DD")}
                          </Row>
                        </Col>
                        <Divider />
                      </Row>
                    )
                  case "delete-user":
                    return (
                      <Row align="middle" justify="start" key={item.id}>
                        <Col span={24}>
                          کاربر {item.low_user.username || "deleted Account "}{" "}
                          توسط {item?.up_user?.username} حذف شد.
                          <Row style={{ fontSize: "0.7em", marginTop: 10 }}>
                            {dayjs(item.created_at * 1000).format("YYYY/MM/DD")}
                          </Row>
                        </Col>
                        <Divider />
                      </Row>
                    )
                  default:
                    return (
                      <Row align="middle" justify="start" wrap key={item.id}>
                        - {item.description}
                        <Divider />
                      </Row>
                    )
                }
              })}
              <Row align="middle" justify="start" wrap>
                کاربر در تاریخ {dayjs(user?.created_at).format("YYYY/MM/DD")} به
                پنل اشراف اضافه شد.
              </Row>
            </Col>
          </Row>
        </Spin>
      </div>
    </AdminLayout>
  )
}

export default ProfilePage
