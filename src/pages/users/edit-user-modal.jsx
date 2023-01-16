import { Button, Form, Input, Spin, Select } from "antd"
import { FloatLabel, ModalContainer } from "../../components"
import { useValidators } from "../../hooks"

const EditUserModal = ({ isOpen, onClose, onAdd }) => {
  const [formInstance] = Form.useForm()
  const { requiredField } = useValidators()
  const handleConfirmStep = () => {
    formInstance
      .validateFields()
      .then((values) => {
        console.log(values)
      })
      .catch((errorInfo) => {
        console.log(errorInfo)
      })
  }

  return (
    <ModalContainer
      centered
      open={isOpen}
      onCancel={onClose}
      //   confirmLoading={isSubmitting}
      //   afterClose={() => formInstance.resetFields()}
      wrapProps={{
        id: "modal-with-infinite-scroll-table",
      }}
      title={
        <div className="modal-header">
          <span>افزودن شخص</span>
        </div>
      }
      footer={
        <div className="footer-cta-btns-container">
          <Button
            type="primary"
            htmlType="submit"
            onClick={handleConfirmStep}
            size="large"
            block
            // loading={isSubmitting}
          >
            افزودن
          </Button>
        </div>
      }
    >
      <Spin spinning size="large">
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
          <Form.Item name="email" rules={[requiredField]}>
            <FloatLabel label="آدرس">
              <Input type="text" className="ltr-input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="email" rules={[requiredField]}>
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
        </Form>
      </Spin>
    </ModalContainer>
  )
}

export default EditUserModal
