import "./Home.scss"

import React, { Component } from "react"
import Header from "../../component/Header/Header"
import Footer from "../../component/Footer/Footer"

class Home extends Component {
  render() {
    return (
      <div className="home d-flex flex-col justify-content-between">
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Home
