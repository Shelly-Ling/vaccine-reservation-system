import React, { Component } from "react"
import withCounter from "./withCounter.js"

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props

    return (
      <button onClick={incrementCount}>
        Click {count} times
      </button>
    )
  }
}

export default withCounter(ClickCounter)
