import "./Home.scss"

import React, { Component } from "react"
import Header from "../../component/Header/Header"
import Footer from "../../component/Footer/Footer"

import ReservationBooking from "../../container/Home/ReservationBooking/ReservationBooking"
import ReservedList from "../ReservedList/ReservedList"
import EditReservation from "../EditReservation/EditReservation"
import ReservationForm from "../ReservationForm/ReservationForm"

/**
 * @description 首頁
 */
class Home extends Component {
  render() {
    return (
      <div className="home d-flex flex-col justify-content-between">
        <Header />
        <ReservationForm />
        {/* <ReservationBooking /> */}
        {/* <EditReservation /> */}
        {/* <ReservedList /> */}
        <Footer />
      </div>
    )
  }
}

export default Home
