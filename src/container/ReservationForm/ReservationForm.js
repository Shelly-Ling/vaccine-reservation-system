import React, { Component } from "react"
import "./ReservationForm.scss"
import VaccineReservationForm from "../../component/VaccineReservationForm/VaccineReservationForm"

class ReservationForm extends Component {
  static defaultProps = {
    showElement: false,
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
      props: {
        showElement,
        pageData,
        title,
        changePage,
        editItem,
      },
    } = this

    const {
      state: { nowPageId },
    } = this

    return showElement ? (
      <VaccineReservationForm
        nowPageId={nowPageId}
        pageData={pageData}
        title={title}
        changePage={changePage}
        editItem={editItem}
      />
    ) : null
  }
}

export default ReservationForm
