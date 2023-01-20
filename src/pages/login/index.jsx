import { useState } from "react"
import { Form, Input, Button, message, Select } from "antd"
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

  const handleLogin = ({ username, password, data }) => {
    setLoading(true)
    // axios
    //   .post("users/login/", { username, password })
    //   .then(({ data }) => {
    localStorage.setItem("token", "csdcc")
    localStorage.setItem("user", JSON.stringify({ name: "ali", role: data }))
    message.success("شما با موفقیت وارد شدید")
    data === "advisor"
      ? navigate("/add-estate")
      : data === "admin"
      ? navigate("/commits")
      : navigate("/estates")
    window.location
      .reload()
      // })
      // .catch(({ response }) => {
      //   const { data } = response
      //   message.error(data?.username ?? data?.password)
      // })
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
              <Form.Item
                name="data"
                rules={[
                  {
                    required: true,
                    message: "لطفا نقش خود را انتخاب کنید",
                  },
                ]}
              >
                <Select
                  className="input"
                  placeholder="نقش"
                  size="large"
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
            </SmoothList>
          </Form>
        </div>
      </SmoothList>
    </GuestLayout>
  )
}

export default LoginPage
