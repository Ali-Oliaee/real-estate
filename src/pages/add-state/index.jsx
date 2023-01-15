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

const AddStatePage = () => {
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
      <Tabs type="card" className="tables-tab-bar">
        <Tabs.TabPane tab="افزودن ملک جدید" key="profile">
          <div className="profile-info">
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
                    <Input readOnly disabled />
                  </FloatLabel>
                </Form.Item>
                <Form.Item name="phone_number" rules={[requiredField]}>
                  <FloatLabel label="شماره تلفن">
                    <Input readOnly disabled type="tel" className="ltr-input" />
                  </FloatLabel>
                </Form.Item>
                <Form.Item name="email" rules={[requiredField, validEmail]}>
                  <FloatLabel label="ایمیل">
                    <Input
                      readOnly
                      disabled
                      type="email"
                      className="ltr-input"
                    />
                  </FloatLabel>
                </Form.Item>
                <Form.Item name="national_code" rules={[requiredField]}>
                  <FloatLabel label="کد ملی">
                    <InputNumber
                      className="full-width ltr-input"
                      readOnly
                      disabled
                    />
                  </FloatLabel>
                </Form.Item>
                <Form.Item name="province" rules={[requiredField]}>
                  <FloatLabel label="استان">
                    <Input readOnly disabled />
                  </FloatLabel>
                </Form.Item>
                <Form.Item name="city" rules={[requiredField]}>
                  <FloatLabel label="شهر">
                    <Input readOnly disabled />
                  </FloatLabel>
                </Form.Item>
                <Form.Item name="address" rules={[requiredField]}>
                  <FloatLabel label="آدرس">
                    <Input.TextArea cols="21" rows="1" readOnly disabled />
                  </FloatLabel>
                </Form.Item>
              </div>
              <Button block loading={loading} type="primary" htmlType="submit">
                ویرایش اطلاعات
              </Button>
            </Form>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </AdminLayout>
  )
}

export default AddStatePage
