import React, { Component } from "react"
import "./App.scss"

import ClickCounter from "./ClickCounter.js"
import HoverCounter from "./HoverCounter.js"

class App extends Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter />
      </div>
    )
  }
}

export default App