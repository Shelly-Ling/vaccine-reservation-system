import React, { Component } from "react"
import "./RenderPropsApp.scss"
import ClickCounterTwo from "./ClickCounterTwo.js"
import HoverCounterTwo from "./HoverCounterTwo.js"
import User from "./User.js"
import Counter from "./Counter.js"

class RenderPropsApp extends Component {
  render() {
    return (
      <div className="RenderPropsApp-js">
        <Counter
          showAndCount={(count, incrementCount, name) => (
            <ClickCounterTwo
              count={count}
              incrementCount={incrementCount}
              name={name}
            />
          )}
        />
        <Counter
          showAndCount={(count, incrementCount) => (
            <HoverCounterTwo
              count={count}
              incrementCount={incrementCount}
            />
          )}
        />
      </div>
    )
  }
}

export default RenderPropsApp
