import { useState } from "react"
import { Form, Input, Button, message } from "antd"
import { Link } from "react-router-dom"
import axios from "../../utils/axios"
import { useValidators } from "../../hooks"
import { GuestLayout } from "../../layouts"
import "./styles.scss"

const LoginPage = () => {
  const [form] = Form.useForm()
  const [isSubmitting, setSubmitting] = useState(false)
  // const history = useHistory()
  const { requiredUsername, requiredPassword } = useValidators()

  // const handleLogin = () => {
  //   form.validateFields().then(({ phone_number, password }) => {
  //     setSubmitting(true)
  //     axios
  //       .post("/users/login/", { password, phone_number: `+98${phone_number}` })
  //       .then(({ data }) => {
  //         const temp = {
  //           ...data.user,
  //           // last_login: dayjs(),
  //           role: data.role,
  //         }
  //         localStorage.setItem("api_key", JSON.stringify(data.tokens))
  //         localStorage.setItem("user", JSON.stringify(temp))
  //         window.location.reload()
  //         history.push("/")
  //       })
  //       .catch(({ response }) => {
  //         const { data } = response
  //         message.error(data?.message ? data.message : data?.phone_number)
  //       })
  //       .finally(() => setSubmitting(false))
  //   })
  // }

  return (
    <GuestLayout>
      <Form
        form={form}
        // onFinish={handleLogin}
        className="login-form"
        // initialValues={history.location.state}
      >
        <h3 className="form-title">پنل مدیریتی املاک</h3>
        <Form.Item name="phone_number" rules={[requiredUsername]}>
          <Input placeholder="نام کاربری" size="large" autoFocus dir="ltr" />
        </Form.Item>
        <Form.Item name="password" rules={[requiredPassword]}>
          <Input.Password
            dir="ltr"
            size="large"
            className="antd-password-input"
            placeholder="رمز عبور"
          />
        </Form.Item>
        <Form.Item noStyle>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="login-button"
            loading={isSubmitting}
            size="large"
          >
            ورود به حساب
          </Button>
        </Form.Item>
      </Form>
    </GuestLayout>
  )
}

export default LoginPage
