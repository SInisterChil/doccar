import React from "react"
import "./Header.css"
const Header = () => {
  return (
    <div className="container">
      <img src="../../contents/Vector.png" />
      <h1 className="heading">Doc.Car</h1>
      <h6 className="home-page">Home</h6>
      <h6 className="services-page">Services</h6>
      <h6 className="aboutus-page">About us</h6>
      <h6 className="contact-page">Contact</h6>
      <h6 className="login-page">Login</h6>
    </div>
  )
}

export default Header
