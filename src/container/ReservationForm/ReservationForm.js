import React, { Component } from "react"
import "./ReservationForm.scss"
import VaccineReservationForm from "../../component/VaccineReservationForm/VaccineReservationForm"

class ReservationForm extends Component {
  static defaultProps = {
    pageData: {},
    title: "",
  }

  constructor(props) {
    super(props)

    this.state = {
      nowPageId: -1,
    }
  }

  componentDidMount() {
    this.setState({
      nowPageId: this.props.pageData.reservationForm.id,
    })
  }

  render() {
    const {
      props: { showElement },
    } = this

    return showElement ? (
      <VaccineReservationForm
        nowPageId={this.state.nowPageId}
        pageData={this.props.pageData}
        title={this.props.title}
        editItem={this.props.editItem}
      />
    ) : null
  }
}

export default ReservationForm
