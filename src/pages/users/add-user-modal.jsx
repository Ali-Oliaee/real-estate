import { useState } from "react"
import { Button, Form, Input, message, Select } from "antd"
import { FloatLabel, ModalContainer } from "../../components"
import axios from "../../utils/axios"
import { useValidators } from "../../hooks"

const AddUserModal = ({ isOpen, onClose, refetch }) => {
  const [formInstance] = Form.useForm()
  const { requiredField } = useValidators()
  const [loading, setLoading] = useState(false)

  const handleConfirmStep = (values) => {
    setLoading(true)
    axios
      .post("/users/register/", values)
      .then(({ data }) => {
        console.log(data)
        message.success("کاربر با موفقیت افزوده شد.")
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
        <Form.Item name="username" rules={[requiredField]}>
          <FloatLabel label="نام کاربری">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="fullname" rules={[requiredField]}>
          <FloatLabel label="نام و نام خانوادگی">
            <Input type="text" className="ltr-input" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="password" rules={[requiredField]}>
          <FloatLabel label="رمزعبور">
            <Input type="tel" className="ltr-input ltr-suffix" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="phone">
          <FloatLabel label="شماره تلفن">
            <Input type="text" className="ltr-input" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="address">
          <FloatLabel label="آدرس">
            <Input type="text" className="ltr-input" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="access_codes">
          <FloatLabel label="دسترسی">
            <Input type="text" className="ltr-input" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="role" rules={[requiredField]}>
          <Select
            placeholder="نقش"
            options={[
              {
                value: "manager",
                label: "مدیر",
              },
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
