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
    birth: "0790101",
    identityNumber: "A111111111",
    phone: "0920222999",
    vaccineType: "AZ",
    dayForVaccination: "2021-06-11",
    remark: "dhhthrjy jdtjktuku fgjnjs",
  },
  {
    name: "王某",
    birth: "0800101",
    identityNumber: "B222222222",
    phone: "0920222999",
    vaccineType: "AZ",
    dayForVaccination: "2021-06-12",
    remark:
      "dhhthrj ydhhthrjy jdtjktuku fgjnjs jdtjktuku fgjnjs",
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

  onNavLinkClick = (e) => {
    const targetId = Number(e.target.id)
    this.setState({ currentComponentId: targetId })
    this.changePage(targetId)
    this.updateReservedListData()
  }

  changePage = (pageId) => {
    this.setState({
      currentComponentId: pageId,
    })
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

  getReservedListData = () => {
    return (
      JSON.parse(localStorage.getItem("reservedList")) ||
      []
    )
  }
  deleteItem = (event) => {
    const deleteItemId = event.target.dataset.id

    const result = this.state.reservedList.filter(
      (item) => item.identityNumber !== deleteItemId
    )

    localStorage.setItem(
      "reservedList",
      JSON.stringify(result)
    )

    this.setState({
      reservedList: result,
    })
  }

  handleEditItemSubmit = (data) => {
    const localReservedList = JSON.parse(
      localStorage.getItem("reservedList")
    )

    let newReservedList = []

    localReservedList.map((item) => {
      if (item.identityNumber === data.identityNumber) {
        newReservedList.push(data)
      } else {
        newReservedList.push(item)
      }
    })

    localStorage.setItem(
      "reservedList",
      JSON.stringify(newReservedList)
    )

    this.updateReservedListData()
  }

  render() {
    const {
      state: {
        pageDataFetchingIsDone,
        pageData,
        reservedList,
        currentComponentId,
      },
    } = this

    return pageDataFetchingIsDone ? (
      <div className="home d-flex flex-col justify-content-between">
        <Header
          currentComponentId={currentComponentId}
          pageData={pageData}
          onNavLinkClick={this.onNavLinkClick}
          changePage={this.changePage}
          updateReservedListData={
            this.updateReservedListData
          }
        />
        <ReservationForm
          pageData={pageData}
          title={pageData.reservationForm.title}
          changePage={this.changePage}
          showElement={
            currentComponentId ===
            pageData.reservationForm.id
          }
        />
        <ReservedList
          reservedList={reservedList}
          pageName={pageData.reservedList.pageName}
          showElement={
            currentComponentId ===
            pageData.reservedList.id
          }
        />
        <EditReservation
          pageData={pageData}
          deleteItem={this.deleteItem}
          reservedList={reservedList}
          handleEditItemSubmit={this.handleEditItemSubmit}
          showElement={
            currentComponentId ===
            pageData.editReservation.id
          }
          updateReservedListData={
            this.updateReservedListData
          }
        />
        <Footer />
      </div>
    ) : null
  }
}

export default Home
