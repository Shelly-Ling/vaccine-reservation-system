import React, { Component } from "react"
import UpdateComponent from "./withCounter.js"

class ClickCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return (
      <button onClick={this.incrementCount}>
        {this.props.name}
        Click {this.state.count} times
      </button>
    )
  }
}

export default UpdateComponent(ClickCounter)
