import { useState } from "react"
import { Form, Input, Button, message } from "antd"
import { Link, useHistory } from "react-router-dom"
import axios from "../../utils/axios"
import { useValidators } from "../../hooks"
import "./styles.scss"

const RegisterPage = () => {
  const [form] = Form.useForm()
  const [isSubmitting, setSubmitting] = useState(false)
  const history = useHistory()
  const {
    requiredName,
    requiredNumber,
    validNumber,
    requiredPassword,
    requiredConfirmPassword,
    validConfirmPassword,
  } = useValidators()

  const handleRegister = () => {
    form.validateFields().then(({ full_name, phone_number, password }) => {
      setSubmitting(true)
      axios
        .post("/users/register-user/", {
          full_name,
          password,
          phone_number: `+98${phone_number}`,
        })
        .then(() => {
          history.push("/login")
          message.success("ثبت نام با موفقیت انجام شد")
        })
        .catch(({ response }) => {
          message.error(
            response?.data?.message
              ? response?.data?.message
              : response?.data?.phone_number
          )
        })
        .finally(() => setSubmitting(false))
    })
  }

  return (
    <>
      <Form
        form={form}
        onFinish={handleRegister}
        className="register-form"
        initialValues={history.location.state}
      >
        {/* <Heading
          subTitle="برای ثبت نام لطفا اطلاعات خود را وارد کنید"
          className="auth-layout-heading"
        /> */}
        <Form.Item name="full_name" rules={[requiredName]}>
          <Input placeholder="نام و نام خانوادگی" size="large" autoFocus />
        </Form.Item>
        <Form.Item name="phone_number" rules={[requiredNumber, validNumber]}>
          <Input
            type="tel"
            className="ltr-input ltr-suffix"
            placeholder="شماره تلفن"
            size="large"
            suffix="+98"
          />
        </Form.Item>
        <Form.Item name="password" rules={[requiredPassword]}>
          <Input.Password
            dir="ltr"
            className="antd-password-input"
            placeholder="رمز عبور"
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[requiredConfirmPassword, validConfirmPassword]}
        >
          <Input.Password
            dir="ltr"
            className="antd-password-input"
            placeholder="تایید رمز عبور"
          />
        </Form.Item>
        <Form.Item noStyle>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="cta-btn"
            loading={isSubmitting}
          >
            ثبت نام
          </Button>
        </Form.Item>
      </Form>
      <p className="change-auth-form-link">
        حساب کاربری دارید؟
        <Link to="/login">ورود به حساب</Link>
      </p>
    </>
  )
}

export default RegisterPage
