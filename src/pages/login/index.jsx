import { useState } from "react"
import { Form, Input, Button, message } from "antd"
import { useNavigate } from "react-router-dom"
import axios from "../../utils/axios"
import { useValidators } from "../../hooks"
import { GuestLayout } from "../../layouts"
import SmoothList from "react-smooth-list"
import "./styles.scss"

const LoginPage = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { requiredUsername, requiredPassword } = useValidators()

  const handleLogin = ({ username, password }) => {
    setLoading(true)
    axios
      .post("users/login/", { username, password })
      .then(({ data }) => {
        localStorage.setItem("token", JSON.stringify(data.tokens))
        localStorage.setItem("user", JSON.stringify(data.user))
        message.success("شما با موفقیت وارد شدید")
        data.user.role === "advisor"
          ? navigate("/add-estate")
          : data.user.role === "admin"
          ? navigate("/commits")
          : navigate("/estates")
        window.location.reload()
      })
      .catch(({ response }) => {
        const { data } = response
        message.error(data?.username ?? data?.password)
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
