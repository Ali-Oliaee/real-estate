import { Button, Form, Input, message } from "antd"
import React, { useState } from "react"
import { FloatLabel, ModalContainer } from "../../components"
import { useValidators } from "../../hooks"
import axios from "../../utils/axios"

const ChangePasswordModal = ({ open, onClose }) => {
  const { requiredField } = useValidators()
  const [loading, setLoading] = useState(false)
  const [formInstance] = Form.useForm()

  const changePassword = (values) => {
    setLoading(true)
    axios
      .post("/users/register/", values)
      .then(() => {
        message.success("کلمه عبور با موفقیت تغییر کرد.")
        onClose()
      })
      .finally(() => setLoading(false))
  }

  return (
    <ModalContainer
      centered
      open={open}
      onCancel={() => {
        onClose()
        formInstance.resetFields()
      }}
      afterClose={formInstance.resetFields}
      title={
        <div className="modal-header">
          <span>تغییر کلمه عبور</span>
        </div>
      }
      footer={false}
    >
      <Form onFinish={changePassword}>
        <Form.Item name="password" rules={[requiredField]}>
          <FloatLabel label="رمزعبور">
            <Input.Password size="small" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="password" rules={[requiredField]}>
          <FloatLabel label="تکرار رمزعبور">
            <Input.Password size="small" />
          </FloatLabel>
        </Form.Item>
        <Button type="primary" htmlType="submit" size="large" loading={loading}>
          تغییر کلمه عبور
        </Button>
      </Form>
    </ModalContainer>
  )
}

export default ChangePasswordModal
