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

// const pageData = [
//   {
//     id: 1,
//     pageName: "reservation-form",
//     title: "預約申請",
//   },
//   {
//     id: 2,
//     pageName: "reserved-list",
//     title: "已預約名單",
//   },
//   {
//     id: 3,
//     pageName: "edit-reservation",
//     title: "編輯預約名單",
//   },
// ]

// localStorage.setItem("pageData", JSON.stringify(pageData))

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
    this.setState(...this.state, {
      currentComponentId: pageId,
    })
  }
  // componentDidMount() {
  //   const data = JSON.parse(
  //     localStorage.getItem("pageData")
  //   )
  //   console.log("componentDidMount data", data)
  //   this.setState({
  //     pageData: data,
  //     currentComponentId: this.data[0].id,
  //   })
  // }

  componentWillMount() {
    const data = JSON.parse(
      localStorage.getItem("pageData")
    )
    console.log("componentWillMount data>>>>>", data)

    this.setState(...this.state, {
      dataFetchingIsDone: true,
      pageData: data,
      currentComponentId: data[0].id,
    })
  }

  render() {
    return this.dataFetchingIsDone ? (
      <div className="home d-flex flex-col justify-content-between">
        <Header
          pageData={this.pageData}
          changePage={this.changePage}
        />

        <ReservationForm
          showElement={
            this.state.currentComponentId ===
            this.pageData[0].id
          }
        />

        <ReservedList
          showElement={
            this.state.currentComponentId ===
            this.pageData[1].id
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
    ) : null
  }
}

export default Home
