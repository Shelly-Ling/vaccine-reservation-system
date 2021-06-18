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
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageId: 1,
      currentComponentId: 1,
    }
  }

  changePage = (pageId) => {
    this.setState({
      currentComponentId: pageId,
      pageId: pageId,
    })
  }

  render() {
    return (
      <div className="home d-flex flex-col justify-content-between">
        <Header
          pageId={this.pageId}
          changePage={this.changePage}
        />

        <ReservationForm
          showElement={
            this.state.currentComponentId === 1
          }
        />

        <ReservedList
          showElement={
            this.state.currentComponentId === 2
          }
        />

        <EditReservation
          showElement={
            this.state.currentComponentId === 3
          }
        />

        <Footer />
      </div>
    )
  }
}

export default Home
