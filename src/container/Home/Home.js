import "./Home.scss"

import React, { Component } from "react"
import Header from "../../component/Header/Header"
import Footer from "../../component/Footer/Footer"

import ReservedList from "../ReservedList/ReservedList"
import EditReservation from "../EditReservation/EditReservation"
import ReservationForm from "../ReservationForm/ReservationForm"

/**
 * @description 首頁
 */

const reservedList = [
  {
    name: "陳某某",
    birth: "800101",
    identityNumber: "A123456777",
    phone: "0920222999",
    vaccineType: "AZ",
    remark: "dhhthrjy jdtjktuku fgjnjs",
  },
  {
    name: "王某",
    birth: "1020701",
    identityNumber: "H223455432",
    phone: "0933333333",
    vaccineType: "AZ",
    remark: "dhhthrjy jdtjktuku fgjnjs",
  },
]

localStorage.setItem(
  "reservedList",
  JSON.stringify(reservedList)
)
class Home extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = {
      pageDataFetchingIsDone: false,
      pageData: [],
      reservedList: [],
      currentComponentId: 1,
    }
  }

  changePage = (pageId) => {
    this.setState({
      currentComponentId: pageId,
    })
    this.updateReservedListData()
  }

  componentDidMount() {
    this.updatePageData()
    this.updateReservedListData()
  }

  updatePageData = () => {
    const newData = this.getPageData()
    if (this.state.pageDataFetchingIsDone === false) {
      this.setState({
        pageData: newData,
        currentComponentId: newData.reservationForm.id,
        pageDataFetchingIsDone: true,
      })
    }
  }

  getPageData = () => {
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
    localStorage.setItem(
      "pageData",
      JSON.stringify(pageData)
    )

    return JSON.parse(localStorage.getItem("pageData"))
  }

  updateReservedListData = () => {
    const reservedListData = this.getReservedListData()
    this.setState({
      reservedList: reservedListData,
    })
  }

  getReservedListData() {
    return (
      JSON.parse(localStorage.getItem("reservedList")) ||
      []
    )
  }
  render() {
    return this.state.pageDataFetchingIsDone ? (
      <div className="home d-flex flex-col justify-content-between">
        <Header
          pageData={this.state.pageData}
          changePage={this.changePage}
          updateReservedListData={
            this.updateReservedListData
          }
        />
        <ReservationForm
          showElement={
            this.state.currentComponentId ===
            this.state.pageData.reservationForm.id
          }
        />
        <ReservedList
          reservedList={this.state.reservedList}
          pageName={
            this.state.pageData.reservedList.pageName
          }
          showElement={
            this.state.currentComponentId ===
            this.state.pageData.reservedList.id
          }
        />
        <EditReservation
          reservedList={this.state.reservedList}
          showElement={
            this.state.currentComponentId ===
            this.state.pageData.editReservation.id
          }
        />
        <Footer />
      </div>
    ) : null
  }
}

export default Home
