import "./Home.scss"
import React, { useState, useEffect } from "react"
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

export const AppContext = React.createContext()

function Home() {
  useEffect(() => {
    getReservedListData()
  }, [])

  const [nowPageId, setNowPageId] = useState(
    pageData.reservedList.id
  )

  const [reservedList, setReservedList] = useState([])

  function onNavLinkClick(targetId) {
    setNowPageId(targetId)
  }

  function getReservedListData() {
    const data =
      JSON.parse(localStorage.getItem("reservedList")) ||
      []
    console.log("data", data)
    setReservedList(data)
  }

  return (
    <div className="home d-flex flex-col justify-content-between">
      <AppContext.Provider
        value={{
          pageData,
          nowPageId,
          onNavLinkClick,
          reservedList,
        }}
      >
        <Header />
        {nowPageId === pageData.reservationForm.id && (
          <ReservationForm />
        )}

        {nowPageId === pageData.reservedList.id && (
          <ReservedList />
        )}
        {nowPageId === pageData.editReservation.id && (
          <EditReservation />
        )}
        <Footer />
      </AppContext.Provider>
    </div>
  )
}

export default Home
