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
        <User
          name={(isLoggedIn) =>
            isLoggedIn ? "Shelly" : "Guest"
          }
        />
      </div>
    )
  }
}

export default RenderPropsApp
