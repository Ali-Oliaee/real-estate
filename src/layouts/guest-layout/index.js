import "./styles.scss"

const GuestLayout = ({ children }) => {
  return (
    <div className="guest-layout-container">
      <div className="inner">{children}</div>
    </div>
  )
}

export default GuestLayout
