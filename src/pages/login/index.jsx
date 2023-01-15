import React, { useState } from "react"
import { Form, Input, Button, message } from "antd"
import { Link, useHistory } from "react-router-dom"
import dayjs from "dayjs"
import axios from "../../utils/axios"
import { Heading } from "../../components"
import { useValidators } from "../../hooks"
import "./styles.scss"

const LoginPage = () => {
  const [form] = Form.useForm()
  const [isSubmitting, setSubmitting] = useState(false)
  const history = useHistory()
  const { requiredNumber, requiredPassword } = useValidators()

  const handleLogin = () => {
    form.validateFields().then(({ phone_number, password }) => {
      setSubmitting(true)
      axios
        .post("/users/login/", { password, phone_number: `+98${phone_number}` })
        .then(({ data }) => {
          const temp = {
            ...data.user,
            last_login: dayjs(),
            role: data.role,
          }
          localStorage.setItem("api_key", JSON.stringify(data.tokens))
          localStorage.setItem("user", JSON.stringify(temp))
          window.location.reload()
          history.push("/")
        })
        .catch(({ response }) => {
          const { data } = response
          message.error(data?.message ? data.message : data?.phone_number)
        })
        .finally(() => setSubmitting(false))
    })
  }

  return (
    <>
      <Form
        form={form}
        onFinish={handleLogin}
        className="login-form"
        initialValues={history.location.state}
      >
        <Heading
          subTitle="برای ورود لطفا شماره تلفن و رمز عبور خود را وارد کنید"
          className="auth-layout-heading"
        />
        <Form.Item name="phone_number" rules={[requiredNumber]}>
          <Input
            type="tel"
            className="ltr-input ltr-suffix"
            placeholder="شماره تلفن"
            size="large"
            suffix="+98"
            autoFocus
          />
        </Form.Item>
        <Form.Item name="password" rules={[requiredPassword]}>
          <Input.Password
            dir="ltr"
            className="antd-password-input"
            placeholder="رمز عبور"
          />
        </Form.Item>
        <p className="forgot-pass-link">
          <Link to="/forgot-password">رمز عبور خود را فراموش کرده اید؟</Link>
        </p>
        <Form.Item noStyle>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="cta-btn"
            loading={isSubmitting}
          >
            ورود به حساب
          </Button>
        </Form.Item>
      </Form>
      <p className="change-auth-form-link">
        حساب کاربری ندارید؟
        <Link to="/register">ثبت نام</Link>
      </p>
    </>
  )
}

export default LoginPage
