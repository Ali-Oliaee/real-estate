import { Button, Form, Input, message } from "antd"
import React, { useState } from "react"
import { FloatLabel, ModalContainer } from "../../components"
import { useValidators } from "../../hooks"
import axios from "../../utils/axios"
import "./styles.scss"

const ChangePasswordModal = ({ open, onClose, id }) => {
  const { requiredField } = useValidators()
  const [loading, setLoading] = useState(false)
  const [formInstance] = Form.useForm()

  const changePassword = (values) => {
    // setLoading(true)
    // axios
    //   .post("/users/change-password/", { ...values, user_id: id })
    //   .then(() => {
    message.success("کلمه عبور با موفقیت تغییر کرد.")
    onClose()
    // })
    // .finally(() => setLoading(false))
  }

  return (
    <ModalContainer
      centered
      className="change-password-modal"
      open={open}
      onCancel={() => {
        onClose()
        formInstance.resetFields()
      }}
      afterClose={formInstance.resetFields}
      title={<span>تغییر کلمه عبور</span>}
      footer={false}
    >
      <Form onFinish={changePassword}>
        <Form.Item name="user_password" rules={[requiredField]}>
          <FloatLabel label="کلمه عبور شما">
            <Input.Password size="small" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="new_password" rules={[requiredField]}>
          <FloatLabel label="کلمه عبور جدید کاربر">
            <Input.Password size="small" />
          </FloatLabel>
        </Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          size="large"
          style={{ marginBottom: 20 }}
          loading={loading}
        >
          تغییر کلمه عبور
        </Button>
      </Form>
    </ModalContainer>
  )
}

export default ChangePasswordModal
