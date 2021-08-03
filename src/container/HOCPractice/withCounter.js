import React from "react"

const withCounter = (
  WrapperComponent,
  incrementNumber
) => {
  class withCounter extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 0,
      }
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNumber,
        }
      })
    }

    render() {
      return (
        <WrapperComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      )
    }
  }
  return withCounter
}

export default withCounter
