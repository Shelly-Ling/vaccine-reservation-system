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
    if (this.state.dataFetchingIsDone) {
      this.setState({
        pageData: this.getPageData(),
        currentComponentId: data[0].id,
        dataFetchingIsDone: true,
      })
    }
  }

  //改寫失敗的部分，調整中:

  // componentDidMount() {
  //   this.getPageData()
  //   this.updatePageData()
  // }

  // getPageData = () => {
  //   const data = JSON.parse(
  //     localStorage.getItem("pageData") || []
  //   )

  //   console.log("data", data)
  //   this.setState(
  //     {
  //       pageData: data,
  //     },
  //     console.log(
  //       "getPageData pageData",
  //       this.state.pageData
  //     )
  //   )
  // }

  // updatePageData = () => {
  //   this.setState({
  //     currentComponentId: this.state.pageData[0].id,
  //   })
  // }

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
