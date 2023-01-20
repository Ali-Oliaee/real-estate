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
      <Form size="large" form={form} onFinish={AddEstate} requiredMark={false}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <Form.Item name="owner_name">
            <FloatLabel label="نام صاحب خانه">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item
            name="owner_phone"
            rules={[
              {
                min: 11,
                message: "شماره تلفن باید 11 رقم باشد.",
              },
              {
                max: 11,
                message: "شماره تلفن باید 11 رقم باشد.",
              },
            ]}
          >
            <FloatLabel label="شماره تلفن">
              <Input style={{ width: 200, marginInlineEnd: 32 }} type="tel" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="area_code" rules={[requiredField]}>
            <FloatLabel label="کد">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="street">
            <FloatLabel label="خیابان">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="plaque">
            <FloatLabel label="پلاک">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="floors">
            <FloatLabel label="طبقات">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="meterage">
            <FloatLabel label="متراژ">
              <Input
                style={{ width: 200, marginInlineEnd: 32 }}
                type="number"
              />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="price_per_meter">
            <FloatLabel label="قیمت متر مربع">
              <Input
                style={{ width: 200, marginInlineEnd: 32 }}
                type="number"
              />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="total_price">
            <FloatLabel label="قیمت کل">
              <Input
                style={{ width: 200, marginInlineEnd: 32 }}
                type="number"
              />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="customer_name">
            <FloatLabel label="مشتری">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="style">
            <FloatLabel label="سبک">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="heating">
            <FloatLabel label="گرمایش">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="bottom">
            <FloatLabel label="کف">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="electricity">
            <FloatLabel label="برق">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="kitchen">
            <FloatLabel label="مطبخ">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="faucets">
            <FloatLabel label="شیرآلات">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="bathtub">
            <FloatLabel label="وان و جکوزی">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="window">
            <FloatLabel label="پنجره">
              <Input style={{ width: 200, marginInlineEnd: 32 }} />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="description">
            <FloatLabel label="توضیحات">
              <Input.TextArea cols={150} rows={1} />
            </FloatLabel>
          </Form.Item>
        </div>
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
