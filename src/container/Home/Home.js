import "./Home.scss"
import Header from "../../component/Header/Header"
import Footer from "../../component/Footer/Footer"
import ReservedList from "./ReservedList/ReservedList"
import EditReservation from "./EditReservation/EditReservation"
import ReservationForm from "./ReservationForm/ReservationForm"

import React, {
  useState,
  useEffect,
  useReducer,
} from "react"

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

const initialState = {
  reservedList: [],
}

const data =
  JSON.parse(localStorage.getItem("reservedList")) || []

const reducer = (state, action) => {
  switch (action.type) {
    case "getReservedListData":
      return {
        reservedList: action.payload,
      }
    case "creatNewReservation":
      return {
        reservedList: action.payload,
      }
    default:
      return {
        reservedList: data,
      }
  }
}

function Home() {
  const [nowPageId, setNowPageId] = useState(
    pageData.reservedList.id
  )

  useEffect(() => {
    dispatch({
      type: "getReservedListData",
      payload: [...data],
    })
  }, [])

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )

  function onNavLinkClick(targetId) {
    setNowPageId(targetId)
  }

  return (
    <div className="home d-flex flex-col justify-content-between">
      <AppContext.Provider
        value={{
          pageData,
          nowPageId,
          state,
          dispatch,
          onNavLinkClick,
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
