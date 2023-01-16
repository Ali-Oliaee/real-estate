import { Button } from "antd"
import React from "react"
import { Link } from "react-router-dom"
import SmoothList from "react-smooth-list"
import { GuestLayout } from "../../layouts"
import "./styles.scss"

const NotFoundPage = () => {
  const isAuth = localStorage.getItem("APi_key")

  return (
    <GuestLayout>
      <SmoothList delay={100} transitionDuration={500} className="animate-form">
        <div className="not-found-form">
          <SmoothList delay={200} transitionDuration={500}>
            <h1>۴۰۴</h1>
            <h2>صفحه مورد نظر یافت نشد</h2>
            <Button type="link">
              <Link to={isAuth ? "/" : "/login"}>بازگشت به صفحه اصلی</Link>
            </Button>
          </SmoothList>
        </div>
      </SmoothList>
    </GuestLayout>
  )
}

export default NotFoundPage
