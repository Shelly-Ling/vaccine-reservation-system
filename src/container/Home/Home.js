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

export const AppStateContext = React.createContext()
export const AppDispatchContext = React.createContext()

const initialState = {
  pageData: pageData,
  reservedList:
    JSON.parse(localStorage.getItem("reservedList")) ||
    [],
  filterReservedList: [],
  nowPageId: pageData.reservationForm.id,
  isEditing: false,
  editData: {},
}

const reducer = (globalState, action) => {
  switch (action.type) {
    case "setNowPageId":
      return {
        ...globalState,
        nowPageId: action.payload,
        filterReservedList: [],
      }

    case "creatNewReservation":
      let newReservedList = [...globalState.reservedList]

      newReservedList.unshift(action.payload)

      return {
        ...globalState,
        reservedList: newReservedList,
        nowPageId: pageData.reservedList.id,
      }
    case "onEditSubmitBtnClick":
      let editedReservedList =
        globalState.reservedList.map((item) => {
          return item.identityNumber ===
            globalState.editData.identityNumber
            ? action.payload
            : item
        })

      let editedFilterReservedList =
        globalState.filterReservedList.map((item) => {
          return item.identityNumber ===
            globalState.editData.identityNumber
            ? action.payload
            : item
        })

      return {
        ...globalState,
        reservedList: editedReservedList,
        filterReservedList: editedFilterReservedList,
        editData: {},
        isEditing: false,
      }
    case "deleteItem":
      const result = globalState.reservedList.filter(
        (item) => {
          return item.identityNumber !== action.payload
        }
      )

      const filterResult =
        globalState.filterReservedList.filter((item) => {
          return item.identityNumber !== action.payload
        })
      return {
        ...globalState,
        reservedList: result,
        filterReservedList: filterResult,
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
    case "onSearchResetBtnClick":
      return {
        ...globalState,
        filterReservedList: [],
      }
    case "filterReservedList":
      const { searchKeyword, conditionSelect } =
        action.payload

      const filterReservedList =
        globalState.reservedList.filter((item) => {
          return item[conditionSelect].match(
            searchKeyword
          )
        })

      if (filterReservedList.length === 0) {
        alert("搜尋結果為 0 個")
      }

      return {
        ...globalState,
        filterReservedList: filterReservedList,
      }

    default:
      return {
        ...globalState,
        reservedList: data,
      }
  }
}

function Home() {
  const [globalState, dispatch] = useReducer(
    reducer,
    initialState
  )

  useEffect(() => {
    localStorage.setItem(
      "reservedList",
      JSON.stringify(globalState.reservedList)
    )
  }, [globalState.reservedList])

  return (
    <div className="home d-flex flex-col justify-content-between">
      <AppStateContext.Provider
        value={{
          pageData,
          globalState,
        }}
      >
        <AppDispatchContext.Provider value={{ dispatch }}>
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
        </AppDispatchContext.Provider>
      </AppStateContext.Provider>
    </div>
  )
}

export default Home
