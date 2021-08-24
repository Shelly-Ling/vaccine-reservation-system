import React, { Component } from "react"
class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props

    return (
      <div className="HoverCounterTwo-js">
        <h2 onMouseMove={incrementCount}>
          Hovered {count} times
        </h2>
      </div>
    )
  }
}
export default HoverCounterTwo
