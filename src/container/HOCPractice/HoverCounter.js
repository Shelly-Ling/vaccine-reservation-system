import React, { Component } from "react"
import withCounter from "./withCounter.js"
class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props

    return (
      <div className="HoverCounter">
        <h2 onMouseMove={incrementCount}>
          Hovered {count} times
        </h2>
      </div>
    )
  }
}
export default withCounter(HoverCounter, 10)
