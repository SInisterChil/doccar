import React from "react"
import "./App.css"
import Header from "./components/header/Header"
import Booking from "./components/booking/Booking"
import Steps from "./components/service steps/Steps"
import Service from "./components/special services/Service"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Booking />
      <Steps />
      <Service />
      <Footer />
    </div>
  )
}

export default App
