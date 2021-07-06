import React, { Component } from "react"
import "./ReservationForm.scss"
import VaccineReservationForm from "../../component/VaccineReservationForm/VaccineReservationForm"

class ReservationForm extends Component {
  static defaultProps = {
    pageData: {},
    title: "",
    changePage: () => {},
    editItem: () => {},
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
      props: { pageData, title, changePage, editItem },
    } = this

    const {
      state: { nowPageId },
    } = this

    return (
      <VaccineReservationForm
        nowPageId={nowPageId}
        pageData={pageData}
        title={title}
        changePage={changePage}
        editItem={editItem}
      />
    )
  }
}

export default ReservationForm
