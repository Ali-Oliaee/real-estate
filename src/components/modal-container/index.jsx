import React from "react"
import { Modal } from "antd"
import { CloseOutlined } from "@ant-design/icons"
import "./styles.scss"

const ModalContainer = ({ children, open, onCancel, title, ...restProps }) => (
  <Modal
    title={title || " "}
    open={open}
    getContainer={false}
    onCancel={onCancel}
    width={800}
    className="styled-modal"
    closeIcon={<CloseOutlined />}
    {...restProps}
  >
    {children}
  </Modal>
)

export default ModalContainer
