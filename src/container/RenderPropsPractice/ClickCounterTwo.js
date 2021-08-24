import React, { Component } from "react"
class ClickCounterTwo extends Component {
  render() {
    const { count, incrementCount, name } = this.props

    return (
      <button
        className="ClickCounterTwo-js"
        onClick={incrementCount}
      >
        {name} Click {count} times
      </button>
    )
  }
}
export default ClickCounterTwo
