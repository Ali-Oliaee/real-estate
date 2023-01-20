import { useState } from "react"
import { Button, Form, Input, message, Select } from "antd"
import { FloatLabel, ModalContainer } from "../../components"
import axios from "../../utils/axios"
import { useValidators } from "../../hooks"
import "./styles.scss"

const AddUserModal = ({ isOpen, onClose, refetch }) => {
  const [formInstance] = Form.useForm()
  const { requiredField } = useValidators()
  const [loading, setLoading] = useState(false)

  const handleConfirmStep = (values) => {
    setLoading(true)
    axios
      .post("/users/register/", values)
      .then(() => {
        message.success("کاربر با موفقیت افزوده شد.")
        formInstance.resetFields()
        refetch()
        onClose()
      })
      .finally(() => setLoading(false))
  }

  return (
    <ModalContainer
      centered
      open={isOpen}
      onCancel={onClose}
      title={<span>افزودن شخص</span>}
      footer={null}
    >
      <Form
        form={formInstance}
        size="large"
        colon={false}
        onFinish={handleConfirmStep}
        requiredMark={false}
      >
        <div className="user-form">
          <Form.Item name="username" rules={[requiredField]}>
            <FloatLabel label="نام کاربری">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="fullname" rules={[requiredField]}>
            <FloatLabel label="نام و نام خانوادگی">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="password" rules={[requiredField]}>
            <FloatLabel label="رمزعبور">
              <Input.Password size="small" className="input password-input" />
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
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="address">
            <FloatLabel label="آدرس">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="access_codes">
            <FloatLabel label="سطح دسترسی">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="role" rules={[requiredField]}>
            <Select
              className="input"
              placeholder="نقش"
              size="large"
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
        </div>
        <Button
          style={{ marginBottom: 20 }}
          loading={loading}
          htmlType="submit"
          type="primary"
          size="large"
          block
        >
          افزودن
        </Button>
      </Form>
    </ModalContainer>
  )
}

export default AddUserModal
