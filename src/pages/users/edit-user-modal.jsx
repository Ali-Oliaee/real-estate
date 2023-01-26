import { Button, Form, Input, Spin, Select, message } from "antd"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getUser } from "../../api/users"
import { useHistory } from "react-router-dom"
import { FloatLabel, ModalContainer } from "../../components"
import { useValidators } from "../../hooks"
import ChangePasswordModal from "./change-password-modal"
import axios from "../../utils/axios"

const EditUserModal = ({ refetch }) => {
  const [formInstance] = Form.useForm()
  const [passwordModal, setPasswordModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const { requiredField } = useValidators()
  let { id, mode } = useParams()
  const history = useHistory()

  const handleConfirmStep = (values) => {
    setLoading(true)
    axios
      .patch(`/users/list/${id}/`, values)
      .then(() => {
        message.success("کاربر با موفقیت ویرایش گردید.")
        history.push("/users")
        refetch()
      })
      .finally(() => setLoading(false))
  }
  const { data, isLoading } = useQuery(["user", id], () => getUser(id))

  useEffect(() => {
    formInstance.setFieldsValue(data)
  }, [data, formInstance])

  return (
    <ModalContainer
      centered
      open={!!id && mode === "edit"}
      onCancel={() => {
        formInstance.resetFields()
        history.push("/users")
      }}
      confirmLoading={isLoading}
      title="ویرایش شخص"
      footer={false}
    >
      <Spin spinning={isLoading} size="large">
        <Form
          form={formInstance}
          onFinish={handleConfirmStep}
          requiredMark={false}
        >
          <div className="user-form">
            <Form.Item name="fullname" rules={[requiredField]}>
              <FloatLabel label="نام">
                <Input className="input" />
              </FloatLabel>
            </Form.Item>
            <Form.Item name="username" rules={[requiredField]}>
              <FloatLabel label="نام کاربری">
                <Input className="input" />
              </FloatLabel>
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  min: 11,
                  message: "شماره تلفن معتبر نمیباشد",
                },
                {
                  max: 11,
                  message: "شماره تلفن معتبر نمیباشد",
                },
              ]}
            >
              <FloatLabel label="شماره تلفن">
                <Input className="input" type="tel" />
              </FloatLabel>
            </Form.Item>
            <Form.Item name="address">
              <FloatLabel label="آدرس">
                <Input className="input" type="text" />
              </FloatLabel>
            </Form.Item>
            <Form.Item name="role">
              <Select
                className="input"
                placeholder="نقش"
                options={[
                  {
                    value: "assistant",
                    label: "معاون",
                  },
                  {
                    value: "admin",
                    label: "ادمین",
                  },
                  {
                    value: "advisor",
                    label: "مشاور",
                  },
                  {
                    value: "user",
                    label: "کاربر",
                  },
                ]}
              />
            </Form.Item>
            <Button
              style={{ width: 200, height: 55, marginBottom: 24 }}
              onClick={() => setPasswordModal(true)}
              size="large"
            >
              تغییر کلمه عبور
            </Button>
          </div>
          <Button
            style={{ marginBottom: 20 }}
            type="primary"
            htmlType="submit"
            size="large"
            block
            loading={loading}
          >
            ویرایش
          </Button>
        </Form>
        <ChangePasswordModal
          open={passwordModal}
          onClose={() => setPasswordModal(false)}
          id={id}
        />
      </Spin>
    </ModalContainer>
  )
}

export default EditUserModal
