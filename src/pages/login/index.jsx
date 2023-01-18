import { useState } from "react"
import { Form, Input, Button, message } from "antd"
import axios from "../../utils/axios"
import { useValidators } from "../../hooks"
import { GuestLayout } from "../../layouts"
import SmoothList from "react-smooth-list"
import "./styles.scss"

const LoginPage = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const { requiredUsername, requiredPassword } = useValidators()

  const handleLogin = ({ username, password }) => {
    console.log(username, password)
    setLoading(true)
    axios
      .post("users/login/", { username, password })
      .then((data) => {
        console.log(data)
        // const temp = {
        //   ...data.user,
        //   // last_login: dayjs(),
        //   role: data.role,
        // }
        // localStorage.setItem("api_key", JSON.stringify(data.tokens))
        // localStorage.setItem("user", JSON.stringify(temp))
      })
      .catch(({ response }) => {
        const { data } = response
        message.error(data?.message ? data.message : data?.phone_number)
      })
      .finally(() => setLoading(false))
  }

  return (
    <GuestLayout>
      <SmoothList delay={100} transitionDuration={500} className="animate-form">
        <div className="inner">
          <Form form={form} onFinish={handleLogin} className="login-form">
            <SmoothList delay={200} transitionDuration={400}>
              <h3 className="form-title">پنل مدیریتی املاک اشراف</h3>
              <Form.Item name="username" rules={[requiredUsername]}>
                <Input
                  placeholder="نام کاربری"
                  size="large"
                  autoFocus
                  dir="ltr"
                />
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
                  loading={loading}
                  size="large"
                >
                  ورود به حساب
                </Button>
              </Form.Item>
            </SmoothList>
          </Form>
        </div>
      </SmoothList>
    </GuestLayout>
  )
}

export default LoginPage
