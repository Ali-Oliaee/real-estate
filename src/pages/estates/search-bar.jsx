import {
  Checkbox,
  Col,
  Divider,
  Input,
  InputNumber,
  Row,
  Slider,
  Button,
} from "antd"
import { useState } from "react"
import "./styles.scss"

const SearchBar = () => {
  const [minPrice, setMinPrice] = useState(600)
  const [maxPrice, setMaxPrice] = useState(7000)
  const [meter, setMeter] = useState([70, 550])

  return (
    <Row>
      <Col>
        <Col>
          <Row className="price-container">
            <h4 className="title">قیمت</h4>
            <Col span={24}>
              <Row align="middle">
                <h4>از</h4>
                <Slider
                  min={0}
                  max={10000}
                  style={{ width: 320 }}
                  onChange={setMinPrice}
                  value={minPrice}
                  className="slider"
                />
                <InputNumber
                  value={minPrice}
                  onChange={setMinPrice}
                  bordered={false}
                />
                <h4>تومان</h4>
              </Row>
              <Row align="middle">
                <h4>تا</h4>
                <Slider
                  min={1}
                  max={10000}
                  style={{ width: 320 }}
                  onChange={setMaxPrice}
                  value={maxPrice}
                  className="slider"
                />
                <InputNumber
                  value={maxPrice}
                  onChange={setMaxPrice}
                  bordered={false}
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
                  onChange={setMeter}
                />
                <h4> تا {meter[1]} متر</h4>
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row>
            <h5>محدوده</h5>
            <Input size="large" width={10} placeholder="محدوده" />
          </Row>
          <Row>
            <h5>سبک</h5>
            <Input size="large" width={10} placeholder="سبک" />
          </Row>
          <Row>
            <h5>گرمایش</h5>
            <Input size="large" width={10} placeholder="گرمایش" />
          </Row>
          <Row>
            <h5>کف</h5>
            <Input size="large" width={10} placeholder="کف" />
          </Row>
          <Row>
            <h5>برق</h5>
            <Input size="large" width={10} placeholder="برق" />
          </Row>
          <Row>
            <h5>مطبخ</h5>
            <Input size="large" width={10} placeholder="مطبخ" />
          </Row>
          <Row>
            <h5>شیرآلات</h5>
            <Input size="large" width={10} placeholder="شیرآلات" />
          </Row>
          <Row>
            <h5>پنجره</h5>
            <Input size="large" width={10} placeholder="پنجره" />
          </Row>
          <Row>
            <h5>وان و جکوزی</h5>
            <Checkbox />
          </Row>
          <Row>
            <Button block type="primary">
              اعمال
            </Button>
          </Row>
        </Col>
      </Col>
    </Row>
  )
}

export default SearchBar
