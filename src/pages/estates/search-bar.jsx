import { Col, Divider, Input, Row, Slider, Button, Form } from "antd"
import axios from "../../utils/axios"
import { useState } from "react"
import "./styles.scss"

const SearchBar = ({ setData, data }) => {
  const [minPrice, setMinPrice] = useState(600)
  const [maxPrice, setMaxPrice] = useState(7000)
  const [meter, setMeter] = useState([70, 550])
  const [form] = Form.useForm()
  const handleSubmit = ({
    area_code,
    style,
    heating,
    bottom,
    electricity,
    kitchen,
    faucets,
    window,
    bathtub,
  }) => {
    axios
      .get(
        `/estate/list/?${area_code ? `area_code=${area_code}&` : ""}${
          style ? `style=${style}&` : ""
        }${heating ? `heating=${heating}&` : ""}${
          bottom ? `bottom=${bottom}&` : ""
        }${electricity ? `electricity=${electricity}&` : ""}${
          kitchen ? `kitchen=${kitchen}&` : ""
        }${faucets ? `faucets=${faucets}&` : ""}${
          window ? `window=${window}&` : ""
        }${bathtub ? `bathtub=${bathtub}&` : ""}`
      )
      .then(({ data }) => setData(data))
  }

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Button
              className="reset-button"
              type="primary"
              onClick={() => {
                form.resetFields()
                setData(null)
              }}
            >
              حذف فیلتر
            </Button>
            <Row className="price-container">
              <h4 className="title">قیمت</h4>
              <Col span={24}>
                <Row align="middle">
                  <h4>از</h4>
                  <Slider
                    min={0}
                    max={10000}
                    style={{ width: 320 }}
                    onChange={(value) => {
                      setMinPrice(value)
                      const newData = data.filter(
                        (estate) => estate.total_price >= value
                      )
                      setData(newData)
                    }}
                    value={minPrice}
                    className="slider"
                  />
                  <Input
                    value={minPrice}
                    onChange={(e) => {
                      const { value: inputValue } = e.target
                      const reg = /^-?\d*(\.\d*)?$/
                      if (
                        reg.test(inputValue) ||
                        inputValue === "" ||
                        inputValue === "-"
                      ) {
                        setMinPrice(inputValue)
                        const newData = data.filter(
                          (estate) => estate.total_price >= inputValue
                        )
                        setData(newData)
                      }
                    }}
                    bordered={false}
                    className="input-number"
                  />
                  <h4>تومان</h4>
                </Row>
                <Row align="middle">
                  <h4>تا</h4>
                  <Slider
                    min={1}
                    max={10000}
                    style={{ width: 320 }}
                    onChange={(value) => {
                      setMaxPrice(value)
                      const newData = data.filter(
                        (estate) => estate.total_price <= value
                      )
                      setData(newData)
                    }}
                    value={maxPrice}
                    className="slider"
                  />
                  <Input
                    value={maxPrice}
                    onChange={(e) => {
                      const { value: inputValue } = e.target
                      const reg = /^-?\d*(\.\d*)?$/
                      if (
                        reg.test(inputValue) ||
                        inputValue === "" ||
                        inputValue === "-"
                      ) {
                        setMaxPrice(inputValue)
                        const newData = data.filter(
                          (estate) => estate.total_price <= inputValue
                        )
                        setData(newData)
                      }
                    }}
                    bordered={false}
                    className="input-number"
                  />
                  <h4>تومان</h4>
                </Row>
              </Col>
            </Row>
            <Divider />
            <Row className="price-container">
              <h5 className="title">متراژ</h5>
              <Col span={24}>
                <Row align="middle">
                  <h4 style={{ minWidth: 66 }}> از {meter[0]} متر</h4>
                  <Slider
                    style={{ width: 320 }}
                    range
                    defaultValue={[70, 550]}
                    max={10000}
                    className="slider"
                    onChange={(value) => {
                      setMeter(value)
                      const newData = data.filter(
                        (estate) =>
                          estate.meterage >= value[0] &&
                          estate.meterage <= value[1]
                      )
                      setData(newData)
                    }}
                  />
                  <h4> تا {meter[1]} متر</h4>
                </Row>
              </Col>
            </Row>
            <Divider />
            <Form form={form} onFinish={handleSubmit}>
              <Row justify="start" align="middle">
                <h5>کد: </h5>
                <Form.Item name="area_code">
                  <Input className="input" />
                </Form.Item>
                <h5>سبک:</h5>
                <Form.Item name="style">
                  <Input className="input" />
                </Form.Item>
              </Row>
              <Row justify="start" align="middle">
                <h5>گرمایش: </h5>
                <Form.Item name="heating">
                  <Input className="input" />
                </Form.Item>
                <h5>کف: </h5>
                <Form.Item name="bottom">
                  <Input className="input" />
                </Form.Item>
              </Row>
              <Row justify="start" align="middle">
                <h5>برق: </h5>
                <Form.Item name="electricity">
                  <Input className="input" />
                </Form.Item>
                <h5>مطبخ: </h5>
                <Form.Item name="kitchen">
                  <Input className="input" />
                </Form.Item>
              </Row>
              <Row justify="start" align="middle">
                <h5>شیرآلات: </h5>
                <Form.Item name="faucets">
                  <Input className="input" />
                </Form.Item>
                <h5>پنجره: </h5>
                <Form.Item name="window">
                  <Input className="input" />
                </Form.Item>
              </Row>
              <Row justify="start" align="middle">
                <h5>وان و جکوزی: </h5>
                <Form.Item name="bathtub">
                  <Input className="input" />
                </Form.Item>
              </Row>
              <Row justify="start" align="middle">
                <Button block type="primary" size="large" htmlType="submit">
                  اعمال
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SearchBar
