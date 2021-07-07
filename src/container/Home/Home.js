import "./Home.scss"

import React, { useState } from "react"
import Header from "../../component/Header/Header"
import Footer from "../../component/Footer/Footer"

import ReservedList from "./ReservedList/ReservedList"
import EditReservation from "./EditReservation/EditReservation"
import ReservationForm from "./ReservationForm/ReservationForm"

/**
 * @description 首頁
 */

const pageData = {
  reservationForm: {
    id: 1,
    pageName: "reservation-form",
    title: "預約申請",
  },
  reservedList: {
    id: 2,
    pageName: "reserved-list",
    title: "已預約名單",
  },
  editReservation: {
    id: 3,
    pageName: "edit-reservation",
    title: "編輯預約名單",
  },
}

function Home() {
  return (
    <div className="home d-flex flex-col justify-content-between">
      <Header />
      <ReservationForm />
      <ReservedList />
      <EditReservation />
      <Footer />
    </div>
  )
}

export default Home
