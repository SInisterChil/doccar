import React from "react"
import Booking from "./booking/Booking"
import Steps from "./service steps/Steps"
import Service from "./special services/Service"
import Footer from "./footer/Footer"

const HomePage = props => {
  return (
    <div className="main">
        <Booking />
        <Steps />
        <Service />
        <Footer />
    </div>
  )
}

export default HomePage;
