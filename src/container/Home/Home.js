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

const pageData = [
  {
    id: 1,
    pageName: "reservation-form",
    title: "預約申請",
  },
  {
    id: 2,
    pageName: "reserved-list",
    title: "已預約名單",
  },
  {
    id: 3,
    pageName: "edit-reservation",
    title: "編輯預約名單",
  },
]
class Home extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = {
      currentComponentId: pageData[0].id,
    }
  }

  changePage = (pageId) => {
    this.setState({
      currentComponentId: pageId,
    })
  }

  render() {
    return (
      <div className="home d-flex flex-col justify-content-between">
        <Header
          pageData={pageData}
          changePage={this.changePage}
        />

        <ReservationForm
          showElement={
            this.state.currentComponentId ===
            pageData[0].id
          }
        />

        <ReservedList
          showElement={
            this.state.currentComponentId ===
            pageData[1].id
          }
        />

        <EditReservation
          showElement={
            this.state.currentComponentId ===
            pageData[2].id
          }
        />

        <Footer />
      </div>
    )
  }
}

export default Home
