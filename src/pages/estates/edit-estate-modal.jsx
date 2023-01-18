import { Button, Form, Input, Spin } from "antd"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getEstate } from "../../api/estates"
import { FloatLabel, ModalContainer } from "../../components"
import { useValidators } from "../../hooks"

const EditEstateModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false)
  const [formInstance] = Form.useForm()
  const { requiredField } = useValidators()
  const { id } = useParams()
  const { data, isLoading, refetch } = useQuery("estate", () => getEstate(id))
  const editEstate = (values) => {
    setLoading(true)
  }

  useEffect(() => {
    formInstance.setFieldsValue(data)
  }, [id])

  return (
    <ModalContainer
      centered
      open={!!id}
      onCancel={onClose}
      afterClose={formInstance.resetFields}
      title={<span>ویرایش ملک</span>}
      footer={false}
    >
      <Spin size="large" spinning={isLoading}>
        <Form
          form={formInstance}
          size="large"
          colon={false}
          onFinish={editEstate}
          requiredMark={false}
        >
          <Form.Item name="owner_name">
            <FloatLabel label="نام مالک">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="owner_phone">
            <FloatLabel label="شماره تلفن مالک">
              <Input type="tel" className="ltr-input ltr-suffix" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="area_code" rules={[requiredField]}>
            <FloatLabel label="کد">
              <Input className="full-width ltr-input" />
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
              <Input.TextArea cols="21" rows="1" />
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
            ویرایش
          </Button>
        </Form>
      </Spin>
    </ModalContainer>
  )
}

export default EditEstateModal
