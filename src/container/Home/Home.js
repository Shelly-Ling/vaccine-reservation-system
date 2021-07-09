import "./Home.scss"
import Header from "../../component/Header/Header"
import Footer from "../../component/Footer/Footer"
import ReservedList from "./ReservedList/ReservedList"
import EditReservation from "./EditReservation/EditReservation"
import VaccineReservationForm from "../../component/VaccineReservationForm/VaccineReservationForm"

import React, { useEffect, useReducer } from "react"

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
  pageData: pageData,
  reservedList: [],
  nowPageId: pageData.reservationForm.id,
  isEditing: false,
  editData: {},
}

const data =
  JSON.parse(localStorage.getItem("reservedList")) || []

const reducer = (globalState, action) => {
  switch (action.type) {
    case "setNowPageId":
      return {
        ...globalState,
        nowPageId: action.payload,
      }
    case "getReservedListData":
      return {
        ...globalState,
        reservedList: action.payload,
      }
    case "creatNewReservation":
      const reserveData = action.payload

      let newReservedList = [...globalState.reservedList]

      newReservedList.unshift(reserveData)

      localStorage.setItem(
        "reservedList",
        JSON.stringify(newReservedList)
      )

      return {
        ...globalState,
        reservedList: newReservedList,
        nowPageId: pageData.reservedList.id,
      }
    case "onEditSubmitBtnClick":
      const EditedData = action.payload

      let editedReservedList = []

      globalState.reservedList.map((item) => {
        if (
          item.identityNumber ===
          EditedData.identityNumber
        ) {
          editedReservedList.push(EditedData)
        } else {
          editedReservedList.push(item)
        }
      })

      localStorage.setItem(
        "reservedList",
        JSON.stringify(editedReservedList)
      )

      return {
        ...globalState,
        reservedList: editedReservedList,
        isEditing: false,
      }
    case "deleteItem":
      const result = globalState.reservedList.filter(
        (item) => item.identityNumber !== action.payload
      )
      console.log("result", result)

      localStorage.setItem(
        "reservedList",
        JSON.stringify(result)
      )
      return {
        ...globalState,
        reservedList: result,
      }
    case "changeIsEditing":
      return {
        ...globalState,
        isEditing: action.payload,
      }
    case "onEditBtnClick":
      const data = globalState.reservedList.find(
        (item) => item.identityNumber === action.payload
      )

      return {
        ...globalState,
        editData: data,
        isEditing: true,
      }
    case "onEditingCancelBtnClick":
      return {
        ...globalState,
        isEditing: false,
        editData: {},
      }
    case "editItemSubmitClick":
      console.log("action", action)
      return {
        ...globalState,
        isEditing: false,
        reservedList: action.payload.newReservedList,
        editData: initialState.editData,
      }
    default:
      return {
        ...globalState,
        reservedList: data,
      }
  }
}

function Home() {
  useEffect(() => {
    dispatch({
      type: "getReservedListData",
      payload: [...data],
    })
  }, [])

  const [globalState, dispatch] = useReducer(
    reducer,
    initialState
  )

  function onNavLinkClick(targetId) {
    dispatch({
      type: "setNowPageId",
      payload: targetId,
    })
  }

  return (
    <div className="home d-flex flex-col justify-content-between">
      <AppContext.Provider
        value={{
          pageData,
          globalState,
          dispatch,
          onNavLinkClick,
        }}
      >
        <Header />
        {globalState.nowPageId ===
          pageData.reservationForm.id && (
          <VaccineReservationForm />
        )}

        {globalState.nowPageId ===
          pageData.reservedList.id && <ReservedList />}
        {globalState.nowPageId ===
          pageData.editReservation.id && (
          <EditReservation />
        )}
        <Footer />
      </AppContext.Provider>
    </div>
  )
}

export default Home
