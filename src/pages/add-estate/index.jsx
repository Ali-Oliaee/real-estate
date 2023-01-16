import { Button, Form, Input, InputNumber, message, Tabs } from "antd"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
// import { CustomDatePicker } from "../../components/CustomDatePicker"
import { FloatLabel } from "../../components"
import { useValidators } from "../../hooks"
import { AdminLayout } from "../../layouts"
// import { getCurrentUser, updateUserbyUser } from '../../api';
import "./styles.scss"

const fieldsToValidate = [
  "full_name",
  "phone_number",
  "email",
  "national_code",
  "province",
  "city",
  "postal_code",
  "address",
  "card_number",
  "shaba_number",
  "account_number",
]

const AddEtatePage = () => {
  const { requiredField, validEmail } = useValidators()
  // const { id: userId, last_login } = JSON.parse(localStorage.getItem("user"))
  const [formInstance] = Form.useForm()
  const [loading, setLoading] = useState(false)
  // const { data: currentUser, refetch } = useQuery("users", () =>
  //   getCurrentUser(userId)
  // )

  // useEffect(
  //   () =>
  //     formInstance.setFieldsValue({
  //       ...currentUser,
  //       last_login,
  //       date_joined: currentUser?.date_joined * 1000,
  //     }),
  //   [currentUser]
  // )

  const validateCurrentStep = () =>
    formInstance.validateFields(fieldsToValidate)

  // const submitCurrentStep = (values) =>
  //   new Promise((resolve, reject) => {
  //     const payload = { id: userId, ...values }

  //     // updateUserbyUser(payload)
  //     //   .then((res) => {
  //     //     refetch()
  //     //     resolve(res)
  //     //   })
  //     //   .catch(reject)
  //   })

  // const handleConfirmStep = () => {
  //   validateCurrentStep().then((values) => {
  //     setLoading(true)
  //     submitCurrentStep(values)
  //       .then(() => {
  //         message.success("حساب کاربری با موفقیت بروزرسانی شد")
  //       })
  //       .catch((err) => message.error(err?.message))
  //       .finally(() => setLoading(false))
  //   })
  // }

  return (
    <AdminLayout>
      <Form
        form={formInstance}
        size="large"
        colon={false}
        // onFinish={handleConfirmStep}
        name="user-profile-form"
        requiredMark={false}
      >
        <div className="inline-container">
          <Form.Item name="full_name" rules={[requiredField]}>
            <FloatLabel label="نام">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="phone_number" rules={[requiredField]}>
            <FloatLabel label="شماره تلفن">
              <Input type="tel" className="ltr-input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="email" rules={[requiredField, validEmail]}>
            <FloatLabel label="کد">
              <Input type="email" className="ltr-input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="national_code" rules={[requiredField]}>
            <FloatLabel label="خیابان">
              <Input className="full-width ltr-input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="province" rules={[requiredField]}>
            <FloatLabel label="پلاک">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="city" rules={[requiredField]}>
            <FloatLabel label="طبقه">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="متراژ">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="قیمت کل">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="مشتری">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="سبک">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="گرمایش">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="کف">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="برق">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="مطبخ">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="شیرآلات">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="و.ج">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="پنجره">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="" rules={[requiredField]}>
            <FloatLabel label="توضیحات">
              <Input.TextArea cols={21} rows={1} />
            </FloatLabel>
          </Form.Item>
        </div>
        <Button block loading={loading} type="primary" htmlType="submit">
          ویرایش اطلاعات
        </Button>
      </Form>
    </AdminLayout>
  )
}

export default AddEtatePage
