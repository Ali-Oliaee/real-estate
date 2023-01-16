import { Button, Form, Input } from "antd"
import { FloatLabel, ModalContainer } from "../../components"
import { useValidators } from "../../hooks"

const AddEstateModal = ({ isOpen, onClose, onAdd }) => {
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
          <span>افزودن ملک</span>
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
          <FloatLabel label="مالک">
            <Input type="text" className="ltr-input" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="national_code" rules={[requiredField]}>
          <FloatLabel label="کد">
            <Input className="full-width ltr-input" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="province" rules={[requiredField]}>
          <FloatLabel label="خیابان">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="city" rules={[requiredField]}>
          <FloatLabel label="پلاک">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="طبقات">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="متراژ">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="قیمت کل">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="طبقات">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="مشتری">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="سبک">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="گرمایش">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="کف">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="برق">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="مطبخ">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="شیرآلات">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="و.ج">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="postal_code" rules={[requiredField]}>
          <FloatLabel label="پنجره">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="address" rules={[requiredField]}>
          <FloatLabel label="توضیحات">
            <Input.TextArea cols="21" rows="1" />
          </FloatLabel>
        </Form.Item>
      </Form>
    </ModalContainer>
  )
}

export default AddEstateModal
