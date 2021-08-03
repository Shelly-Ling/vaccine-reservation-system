import React, { Component } from "react"
import "./RenderPropsApp.scss"

import ClickCounterTwo from "./ClickCounterTwo.js"
import HoverCounterTwo from "./HoverCounterTwo.js"
import User from "./User.js"

class RenderPropsApp extends Component {
  render() {
    return (
      <div>
        <ClickCounterTwo />
        <HoverCounterTwo />
        <User name="Shelly" />
      </div>
    )
  }
}

export default RenderPropsApp
