import React, { useState } from "react"
import { Button, Divider, Form, Statistic, Steps, Input, message } from "antd"
import { Link } from "react-router-dom"
import { useValidators } from "../../hooks"
import axios from "../../utils/axios"
import { GuestLayout } from "../../layouts"
import "./styles.scss"

const ForgotPasswordPage = () => {
  const [form] = Form.useForm()
  // const history = useHistory()
  const [number, setNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [resetButtonLoading, setResetButtonLoading] = useState(true)
  const [step, setStep] = useState(0)
  const { Step } = Steps
  const { Countdown } = Statistic
  const {
    requiredNumber,
    validNumber,
    requiredCode,
    validCode,
    validConfirmPassword,
    requiredNewPassword,
    requiredConfirmPassword,
  } = useValidators()
  const deadline = Date.now() + 1000 * 60

  const sendMessage = ({ phone_number }) => {
    setLoading(true)
    axios
      .post("users/forgot-password/", { phone_number: `+98${phone_number}` })
      .then(() => {
        message.success("کد تایید برای شما ارسال شد")
        setNumber(phone_number)
        setStep(1)
      })
      .catch(({ response }) => {
        const { data } = response
        message.error(data?.message ? data.message : data?.phone_number)
      })
      .finally(() => setLoading(false))
  }

  const resendMessage = () => {
    setResetButtonLoading(true)
    axios
      .post("users/forgot-password/", { phone_number: `+98${number}` })
      .then(() => message.success("کد تایید مجددا برای شما ارسال شد"))
      .finally(() => setResetButtonLoading(false))
  }

  const sendCode = ({ code }) => {
    setLoading(true)
    axios
      .post("users/verify-forgot-password/", {
        code,
        phone_number: `+98${number}`,
      })
      .then(({ data }) => {
        message.success(data.message)
        setStep(2)
      })
      .finally(() => setLoading(false))
  }

  const handleSubmit = ({ password }) => {
    setLoading(true)
    axios
      .post("users/confirm-forgot-password/", {
        password,
        phone_number: `+98${number}`,
      })
      .then(() => {
        message.success("رمز عبور شما با موفقیت تغییر یافت")
        // history.push("/login")
      })
      .finally(() => setLoading(false))
  }

  return (
    <GuestLayout>
      <div className="forgot-password">
        <div className="steps">
          <Steps direction="vertical">
            <Step
              status={!step ? "process" : "finish"}
              title="وارد کردن شماره تلفن"
            />
            <Step
              status={step === 1 ? "process" : step === 2 ? "finish" : "wait"}
              title="وارد کردن کد تایید"
            />
            <Step
              status={step < 2 ? "wait" : "process"}
              title="وارد کردن رمز عبور حدید"
            />
          </Steps>
        </div>
        <div className="step-content">
          {!step ? (
            <Form form={form} onFinish={sendMessage}>
              <div>
                <h1>فراموشی رمز عبور</h1>
                <p>
                  شماره تلفن خود را وارد کنید تا کد تایید برای شما ارسال شود
                </p>
              </div>
              <Form.Item
                name="phone_number"
                rules={[requiredNumber, validNumber]}
              >
                <Input
                  type="tel"
                  className="ltr-input ltr-suffix"
                  placeholder="شماره تلفن"
                  size="large"
                  suffix="+98"
                  autoFocus
                />
              </Form.Item>
              <Button loading={loading} block type="primary" htmlType="submit">
                تایید
              </Button>
              <Divider>یا</Divider>
              <Link to="/register">ساخت حساب کاربری جدید</Link>
            </Form>
          ) : step === 1 ? (
            <Form form={form} onFinish={sendCode}>
              <div>
                <h1>تایید کد</h1>
              </div>
              <Form.Item name="code" rules={[requiredCode, validCode]}>
                <Input
                  label="code"
                  type="text"
                  placeholder="کد تایید"
                  autoFocus
                />
              </Form.Item>
              <Button loading={loading} block type="primary" htmlType="submit">
                تایید
              </Button>
              <Button
                disabled={resetButtonLoading}
                block
                loading={resetButtonLoading}
                type="ghost"
                onClick={resendMessage}
                className="reset-code-button"
              >
                {resetButtonLoading ? (
                  <Countdown
                    title="ارسال مجدد کد"
                    value={deadline}
                    onFinish={() => setResetButtonLoading(false)}
                    format="mm : ss"
                  />
                ) : (
                  "ارسال مجدد کد"
                )}
              </Button>
            </Form>
          ) : (
            <Form form={form} onFinish={handleSubmit}>
              <Form.Item rules={[requiredNewPassword]} name="password">
                <Input autoFocus type="password" placeholder="رمز عبور جدید" />
              </Form.Item>
              <Form.Item
                rules={[requiredConfirmPassword, validConfirmPassword]}
                name="confirmPassword"
              >
                <Input type="password" placeholder="تایید رمز عبور جدید" />
              </Form.Item>
              <Button loading={loading} block type="primary" htmlType="submit">
                تایید
              </Button>
            </Form>
          )}
        </div>
      </div>
    </GuestLayout>
  )
}

export default ForgotPasswordPage
