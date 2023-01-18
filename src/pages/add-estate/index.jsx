import { Button, Form, Input, message } from "antd"
import { useState } from "react"
import { FloatLabel } from "../../components"
import { useValidators } from "../../hooks"
import { AdminLayout } from "../../layouts"
import axios from "../../utils/axios"
import "./styles.scss"

const AddEstatePage = () => {
  const { requiredField } = useValidators()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const AddEstate = (values) => {
    setLoading(true)
    axios
      .post("/estate/create-home/", values)
      .then(() => {
        message.success("ملک با موفقیت اضافه شد.")
        form.resetFields()
      })
      .finally(() => setLoading(false))
  }

  return (
    <AdminLayout>
      <Form
        size="large"
        form={form}
        onFinish={AddEstate}
        name="user-profile-form"
        requiredMark={false}
      >
        <Form.Item name="owner_name">
          <FloatLabel label="نام">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="owner_phone">
          <FloatLabel label="شماره تلفن">
            <Input type="tel" />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="area_code" rules={[requiredField]}>
          <FloatLabel label="کد">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="street">
          <FloatLabel label="خیابان">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="plaque">
          <FloatLabel label="پلاک">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="floors">
          <FloatLabel label="طبقات">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="meterage">
          <FloatLabel label="متراژ">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="price_per_meter">
          <FloatLabel label="قیمت متر مربع">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="total_price">
          <FloatLabel label="قیمت کل">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="customer_name">
          <FloatLabel label="مشتری">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="style">
          <FloatLabel label="سبک">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="heating">
          <FloatLabel label="گرمایش">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="bottom">
          <FloatLabel label="کف">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="electricity">
          <FloatLabel label="برق">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="kitchen">
          <FloatLabel label="مطبخ">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="faucets">
          <FloatLabel label="شیرآلات">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="bathtub">
          <FloatLabel label="وان و جکوزی">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="window">
          <FloatLabel label="پنجره">
            <Input />
          </FloatLabel>
        </Form.Item>
        <Form.Item name="description">
          <FloatLabel label="توضیحات">
            <Input.TextArea cols={21} rows={1} />
          </FloatLabel>
        </Form.Item>
        <Button
          block
          size="large"
          loading={loading}
          type="primary"
          htmlType="submit"
        >
          افزودن اطلاعات
        </Button>
      </Form>
    </AdminLayout>
  )
}

export default AddEstatePage
