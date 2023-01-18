import { Button, Form, Input, Spin, Select, message } from "antd"
import axios from "../../utils/axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getUser } from "../../api/users"
import { useNavigate } from "react-router-dom"
import { FloatLabel, ModalContainer } from "../../components"
import { useValidators } from "../../hooks"

const EditUserModal = () => {
  const [formInstance] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { requiredField } = useValidators()
  const { id } = useParams()
  const { data, isLoading, refetch } = useQuery("user", () => getUser(id))

  const handleConfirmStep = (values) => {
    setLoading(true)
    axios
      .patch(`/users/list/${id}/`, values)
      .then(() => {
        message.success("کاربر با موفقیت ویرایش گردید.")
        navigate("/users")
        refetch()
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    refetch()
    data && formInstance.setFieldsValue(data)
  }, [id])

  return (
    <ModalContainer
      centered
      open={!!id}
      onCancel={() => {
        formInstance.resetFields()
        navigate("/users")
      }}
      confirmLoading={isLoading}
      afterClose={formInstance.resetFields}
      title={
        <div className="modal-header">
          <span>ویرایش شخص</span>
        </div>
      }
      footer={false}
    >
      <Spin spinning={isLoading} size="large">
        <Form
          form={formInstance}
          colon={false}
          onFinish={handleConfirmStep}
          requiredMark={false}
        >
          <Form.Item name="fullname" rules={[requiredField]}>
            <FloatLabel label="نام">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="username" rules={[requiredField]}>
            <FloatLabel label="نام کاربری">
              <Input />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="phone">
            <FloatLabel label="شماره تلفن">
              <Input type="tel" className="ltr-input ltr-suffix" />
            </FloatLabel>
          </Form.Item>
          <Form.Item name="role">
            <Select
              placeholder="نقش"
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
          <Form.Item name="address">
            <FloatLabel label="آدرس">
              <Input type="text" className="ltr-input" />
            </FloatLabel>
          </Form.Item>
          <Button
            style={{ marginBottom: 20 }}
            type="primary"
            htmlType="submit"
            size="large"
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

export default EditUserModal
