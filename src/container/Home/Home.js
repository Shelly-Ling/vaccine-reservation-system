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

export const PageDataContext = React.createContext()
export const NowPageIdContext = React.createContext()
export const OnNavLinkClickContext = React.createContext()
export const ReservedListContext = React.createContext()

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
      <PageDataContext.Provider value={pageData}>
        <NowPageIdContext.Provider value={nowPageId}>
          <OnNavLinkClickContext.Provider
            value={onNavLinkClick}
          >
            <Header />
            {nowPageId ===
              pageData.reservationForm.id && (
              <ReservationForm />
            )}
            <ReservedListContext.Provider
              value={reservedList}
            >
              {nowPageId === pageData.reservedList.id && (
                <ReservedList />
              )}
              {nowPageId ===
                pageData.editReservation.id && (
                <EditReservation />
              )}
            </ReservedListContext.Provider>
            <Footer />
          </OnNavLinkClickContext.Provider>
        </NowPageIdContext.Provider>
      </PageDataContext.Provider>
    </div>
  )
}

export default Home
