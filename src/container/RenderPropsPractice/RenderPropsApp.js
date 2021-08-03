import React, { Component } from "react"
import "./RenderPropsApp.scss"

import ClickCounterTwo from "./ClickCounterTwo.js"
import HoverCounterTwo from "./HoverCounterTwo.js"

class RenderPropsApp extends Component {
  render() {
    return (
      <div>
        <ClickCounterTwo />
        <HoverCounterTwo />
      </div>
    )
  }
}

export default RenderPropsApp
