import { useState } from "react"
import { Button, Form, Input, Select } from "antd"
import { FloatLabel, ModalContainer } from "../../components"
import axios from "../../utils/axios"
import { useValidators } from "../../hooks"

const AddUserModal = ({ isOpen, onClose }) => {
  const [formInstance] = Form.useForm()
  const { requiredField } = useValidators()
  const [loading, setLoading] = useState(false)

  const handleConfirmStep = (values) => {
    console.log(values)
    setLoading(true)
    axios
      .post("/users/register/", values)
      .then((res) => {
        console.log(res)
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
        <Form.Item name="full_name" rules={[requiredField]}>
          <FloatLabel label="نام">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="phone_number" rules={[requiredField]}>
          <FloatLabel label="شماره تلفن">
            <Input type="tel" className="ltr-input ltr-suffix" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="email" rules={[requiredField]}>
          <FloatLabel label="آدرس">
            <Input type="text" className="ltr-input" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="role" rules={[requiredField]}>
          <Select
            placeholder="نقش"
            options={[
              {
                value: "ادمین",
                label: "ادمین",
              },
              {
                value: "ویرایشگر",
                label: "ویرایشگر",
              },
              {
                value: "کاربر",
                label: "کاربر",
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="password" rules={[requiredField]}>
          <FloatLabel label="رمز عبور">
            <Input type="text" className="ltr-input" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="national_code" rules={[requiredField]}>
          <FloatLabel label="ایمیل">
            <Input className="full-width ltr-input" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="address" rules={[requiredField]}>
          <FloatLabel label="توضیحات">
            <Input.TextArea cols="21" rows="1" />
          </FloatLabel>
        </Form.Item>
        <Button
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
