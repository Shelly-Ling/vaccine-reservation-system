import React, { Component } from "react"
import "./ReservationForm.scss"
import VaccineReservationForm from "../../component/VaccineReservationForm/VaccineReservationForm"

class ReservationForm extends Component {
  static defaultProps = {
    title: "",
  }

  render() {
    const {
      props: { showElement },
    } = this

    return showElement ? (
      <VaccineReservationForm
        title={this.props.title}
        editItem={this.props.editItem}
      />
    ) : null
  }
}

export default ReservationForm
