import { Button, Form, Input, message } from "antd"
import axios from "../../utils/axios"
import { useState } from "react"
import { FloatLabel, ModalContainer } from "../../components"
import qs from "query-string"
import { useLocation } from "react-router-dom"
import { useValidators } from "../../hooks"
import "./styles.scss"

const AddEstateModal = ({ onClose, refetch }) => {
  const location = useLocation()
  const { mode } = qs.parse(location.search)
  const [loading, setLoading] = useState(false)
  const [formInstance] = Form.useForm()
  const { requiredField } = useValidators()
  const addEstate = (values) => {
    setLoading(true)
    axios
      .post("/estate/create-home/", values)
      .then(() => {
        message.success("ملک با موفقیت افزوده شد")
        formInstance.resetFields()
        refetch()
        onClose()
      })
      .finally(() => setLoading(false))
  }

  return (
    <ModalContainer
      centered
      open={mode === "create"}
      onCancel={onClose}
      afterClose={formInstance.resetFields}
      title={<span>افزودن ملک</span>}
      footer={false}
    >
      <Form
        form={formInstance}
        size="large"
        colon={false}
        onFinish={addEstate}
        requiredMark={false}
      >
        <div className="estate-form">
          <Form.Item name="owner_name">
            <FloatLabel label="نام مالک">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item
            name="owner_phone"
            rules={[
              {
                min: 11,
                message: "شماره تلفن معتبر نمیباشد",
              },
              {
                max: 11,
                message: "شماره تلفن معتبر نمیباشد",
              },
            ]}
          >
            <FloatLabel label="شماره تلفن مالک">
              <Input className="input" type="tel" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="area_code" rules={[requiredField]}>
            <FloatLabel label="کد">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="street">
            <FloatLabel label="خیابان">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="plaque">
            <FloatLabel label="پلاک">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="floors">
            <FloatLabel label="طبقات">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="meterage">
            <FloatLabel label="متراژ">
              <Input className="input" type="number" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="price_per_meter">
            <FloatLabel label="قیمت متر مربع">
              <Input className="input" type="number" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="total_price">
            <FloatLabel label="قیمت کل">
              <Input className="input" type="number" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="customer_name">
            <FloatLabel label="مشتری">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="style">
            <FloatLabel label="سبک">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="heating">
            <FloatLabel label="گرمایش">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="bottom">
            <FloatLabel label="کف">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="electricity">
            <FloatLabel label="برق">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="kitchen">
            <FloatLabel label="مطبخ">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="faucets">
            <FloatLabel label="شیرآلات">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="bathtub">
            <FloatLabel label="وان و جکوزی">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="window">
            <FloatLabel label="پنجره">
              <Input className="input" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="description">
            <FloatLabel label="توضیحات">
              <Input.TextArea cols="100" rows="1" />
            </FloatLabel>
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ marginBottom: 20 }}
            block
            loading={loading}
          >
            افزودن
          </Button>
        </div>
      </Form>
    </ModalContainer>
  )
}

export default AddEstateModal
