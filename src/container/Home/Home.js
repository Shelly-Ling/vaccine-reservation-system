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
      currentComponentId: 1,
    }
    this.changePage = this.changePage.bind(this)
  }

  changePage(pageId) {
    this.setState({ currentComponentId: pageId })
  }

  render() {
    return (
      <div className="home d-flex flex-col justify-content-between">
        <Header changePage={this.changePage} />

        {this.state.currentComponentId === 1 ? (
          <ReservationForm />
        ) : null}

        {this.state.currentComponentId === 2 ? (
          <ReservedList />
        ) : null}

        {this.state.currentComponentId === 3 ? (
          <EditReservation />
        ) : null}

        <Footer />
      </div>
    )
  }
}

export default Home
