import "./EditReservation.scss"
import React, { Component } from "react"
import PropTypes from "prop-types"
import TableList from "../../component/TableList/TableList"
import SearchBar from "../../component/SearchBar/SearchBar"
import VaccineReservationForm from "../../component/VaccineReservationForm/VaccineReservationForm"

class EditReservation extends Component {
  static defaultProps = {
    deleteItem: () => {},
    handleEditItemSubmit: () => {},
  }
  constructor(props) {
    super(props)

    this.state = {
      componentReceiveProps: false,
      reservedList: this.props.reservedList,
      isEditing: true,
      userEditingData: {
        name: "",
        birth: "",
        identityNumber: "",
        phone: "",
        vaccineType: "",
        dayForVaccination: "",
        remark: "",
      },
    }
  }

  editItem = (event) => {
    const targetParentDom =
      event.target.parentNode.parentNode

    const editItemId = targetParentDom.dataset.id

    const data = this.props.reservedList.find(
      (item) => item.identityNumber === editItemId
    )

    this.setState(
      {
        userEditingData: { ...data },
      },
      () => {
        console.log(
          "this.state.userReservationData",
          this.state.userEditingData
        )
      }
    )
  }

  render() {
    const {
      props: { showElement },
    } = this

    return showElement ? (
      <div className="edit-reservation__wrap padding-b-30">
        <div
          className={`modal edit-modal margin-r-50 margin-l-50 margin-b-20 padding-10 border-radius-50 ${
            this.state.isEditing
              ? "display-block"
              : "display-none"
          }`}
        >
          <VaccineReservationForm
            title="編輯預約資訊表"
            className="margin-0-auto"
            editItem={this.editItem}
            handleEditItemSubmit={
              this.props.handleEditItemSubmit
            }
            userEditingData={this.state.userEditingData}
            fillInEditingData={
              this.props.fillInEditingData
            }
          />
        </div>
        <div className="d-flex justify-content-center align-self-center">
          <div className="info padding-t-30 padding-b-30 padding-l-20">
            <h1 className="title fz-30 fz-bold padding-b-20">
              編輯預約名單
            </h1>
          </div>
        </div>
        <TableList
          reservedList={this.props.reservedList}
          deleteItem={this.props.deleteItem}
          editItem={this.editItem}
          children={<SearchBar />}
        />
      </div>
    ) : null
  }
}

export default EditReservation
