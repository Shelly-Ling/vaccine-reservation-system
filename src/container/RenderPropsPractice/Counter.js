import React, { Component } from "react"

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      name: "shelly",
    }
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  render() {
    const { count, name } = this.state

    return (
      <div className="Counter-js">
        {this.props.showAndCount(
          this.state.count,
          this.incrementCount,
          this.state.name
        )}
      </div>
    )
  }
}

export default Counter
