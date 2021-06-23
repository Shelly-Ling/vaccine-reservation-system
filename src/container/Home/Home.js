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

localStorage.setItem("pageData", JSON.stringify(pageData))

class Home extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = {
      dataFetchingIsDone: false,
      pageData: [],
      currentComponentId: 1,
    }
  }

  changePage = (pageId) => {
    this.setState({
      currentComponentId: pageId,
    })
  }

  componentDidMount() {
    this.updatePageData()
  }

  getPageData = () => {
    return JSON.parse(localStorage.getItem("pageData"))
  }

  updatePageData = () => {
    const newData = this.getPageData()
    if (this.state.dataFetchingIsDone === false) {
      this.setState({
        pageData: newData,
        currentComponentId: newData[0].id,
        dataFetchingIsDone: true,
      })
    }
  }

  render() {
    return this.state.dataFetchingIsDone ? (
      <div className="home d-flex flex-col justify-content-between">
        <Header
          pageData={this.state.pageData}
          changePage={this.changePage}
        />
        <ReservationForm
          showElement={
            this.state.currentComponentId ===
            this.state.pageData[0].id
          }
        />
        <ReservedList
          pageName={this.state.pageData[1].pageName}
          showElement={
            this.state.currentComponentId ===
            this.state.pageData[1].id
          }
        />
        <EditReservation
          showElement={
            this.state.currentComponentId ===
            this.state.pageData[2].id
          }
        />
        <Footer />
      </div>
    ) : null
  }
}

export default Home
