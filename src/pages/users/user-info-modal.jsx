import React from "react"
import { Col, Divider, Row, Spin } from "antd"
import { useQuery } from "react-query"
import { getUser, getUserHistoryById } from "../../api/users"
import { ModalContainer } from "../../components"
import { useParams, useNavigate } from "react-router"
import dayjs from "dayjs"

const UserInfoModal = () => {
  const { id, mode } = useParams()
  const navigate = useNavigate()
  // const { data: history } = useQuery(["user-history", id], () =>
  //   getUserHistoryById(id)
  // )
  // const { data: user, isLoading } = useQuery(["current-user", id], () =>
  //   getUser(id)
  // )

  const user = {
    fullname: "محمد محمدی",
    username: "mohammad",
    role: "manager",
  }

  return (
    <ModalContainer
      open={mode === "info"}
      centered
      onCancel={() => navigate("/users")}
      footer={false}
      title="اطلاعات حساب "
    >
      <Spin size="large" spinning={false}>
        <div className="user-info-modal">
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
          </Row>
          <Divider />
          <h2>تاریخچه</h2>
          {[1]?.map((item) => {
            switch (item.title) {
              case "create-user":
                return (
                  <Row align="middle" justify="start" key={item.id}>
                    <Col span={24}>
                      کاربر {item.low_user.username || "deleted Account "} توسط{" "}
                      {item?.up_user?.username} ساخته شد.
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
                      کاربر {item.low_user.username || "deleted Account "} توسط{" "}
                      {item?.up_user?.username} حذف شد.
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
        </div>
      </Spin>
    </ModalContainer>
  )
}

export default UserInfoModal
