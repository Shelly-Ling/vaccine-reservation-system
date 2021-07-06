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

class Home extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = {
      pageData: pageData,
      reservedList: [],
      nowPageId: 1,
    }
  }

  onNavLinkClick = (event) => {
    const targetId = Number(event.target.dataset.id)
    this.changePage(targetId)
    this.updateReservedListData()
  }

  changePage = (pageId) => {
    this.setState({
      nowPageId: pageId,
    })
  }

  componentDidMount() {
    this.updateReservedListData()
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
        nowPageId,
      },
    } = this

    return (
      <div className="home d-flex flex-col justify-content-between">
        <Header
          nowPageId={nowPageId}
          pageData={pageData}
          onNavLinkClick={this.onNavLinkClick}
          changePage={this.changePage}
          updateReservedListData={
            this.updateReservedListData
          }
        />

        {nowPageId === pageData.reservationForm.id && (
          <ReservationForm
            pageData={pageData}
            title={pageData.reservationForm.title}
            changePage={this.changePage}
          />
        )}
        {nowPageId === pageData.reservedList.id && (
          <ReservedList
            reservedList={reservedList}
            pageName={pageData.reservedList.pageName}
          />
        )}

        {nowPageId === pageData.editReservation.id && (
          <EditReservation
            pageData={pageData}
            deleteItem={this.deleteItem}
            reservedList={reservedList}
            handleEditItemSubmit={
              this.handleEditItemSubmit
            }
            updateReservedListData={
              this.updateReservedListData
            }
          />
        )}
        <Footer />
      </div>
    )
  }
}

export default Home
