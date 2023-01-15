import { Button } from "antd"
import React from "react"
import { Link } from "react-router-dom"
import "./styles.scss"

const NotFoundPage = () => {
  const isAuth = localStorage.getItem("APi_key")

  return (
    <div className="not-found-page">
      <h1>۴۰۴</h1>
      <h2>صفحه مورد نظر یافت نشد</h2>
      <Button>
        <Link to={isAuth ? "/" : "/login"}>بازگشت به صفحه اصلی</Link>
      </Button>
    </div>
  )
}

export default NotFoundPage
