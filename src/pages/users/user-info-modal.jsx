import React from "react"
import { Divider, Row, Spin } from "antd"
import { useQuery } from "react-query"
import { getUser } from "../../api/users"
import { ModalContainer } from "../../components"
import { useParams, useNavigate } from "react-router"

const UserInfoModal = () => {
  const { id, mode } = useParams()
  const navigate = useNavigate()
  const { data: user, isLoading } = useQuery(["current-user", id], () =>
    getUser(id)
  )

  return (
    <ModalContainer
      open={mode === "info"}
      centered
      onCancel={() => navigate("/users")}
      footer={false}
      title="اطلاعات حساب "
    >
      <Spin size="large" spinning={isLoading}>
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
        </div>
      </Spin>
    </ModalContainer>
  )
}

export default UserInfoModal
