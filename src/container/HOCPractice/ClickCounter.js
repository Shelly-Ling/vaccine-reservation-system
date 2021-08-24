import React, { Component } from "react"
import withCounter from "./withCounter.js"
class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props

    return (
      <button
        className="ClickCounter"
        onClick={incrementCount}
      >
        {this.props.name} Click {count} times
      </button>
    )
  }
}
export default withCounter(ClickCounter, 5)
