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
  reservedList: [],
  filterReservedList: [],
  nowPageId: pageData.reservationForm.id,
  isEditing: false,
  editData: {},
}

const reducer = (globalState, action) => {
  const localReservedListData =
    JSON.parse(localStorage.getItem("reservedList")) || []

  switch (action.type) {
    case "setNowPageId":
      return {
        ...globalState,
        nowPageId: action.payload,
        reservedList: localReservedListData,
      }
    case "getReservedListData":
      return {
        ...globalState,
        reservedList: localReservedListData,
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
      const result = localReservedListData.filter(
        (item) => item.identityNumber !== action.payload
      )
      localStorage.setItem(
        "reservedList",
        JSON.stringify(result)
      )

      if (globalState.filterReservedList.length) {
        const filterResult =
          globalState.filterReservedList.filter(
            (item) =>
              item.identityNumber !== action.payload
          )

        if (filterResult.length === 0) {
          return {
            ...globalState,
            reservedList: result,
            filterReservedList: [],
          }
        }

        return {
          ...globalState,
          filterReservedList: filterResult,
          reservedList: result,
        }
      }

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
      return {
        ...globalState,
        isEditing: false,
        reservedList: action.payload.newReservedList,
        editData: initialState.editData,
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
  useEffect(() => {
    dispatch({
      type: "getReservedListData",
    })
  }, [])

  const [globalState, dispatch] = useReducer(
    reducer,
    initialState
  )

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
