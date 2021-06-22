import "./EditReservation.scss"

import React, { Component } from "react"
import TableList from "../../component/TableList/TableList"

const reservedListFromAPI = [
  {
    id: 1,
    name: "陳某某",
    birth: "800101",
    identityNumber: "A123456777",
    phone: "0920222999",
    vaccineType: "AZ",
    remark: "dhhthrjy jdtjktuku fgjnjs",
  },
  {
    id: 2,
    name: "王某",
    birth: "1020701",
    identityNumber: "H223455432",
    phone: "0933333333",
    vaccineType: "AZ",
    remark: "dhhthrjy jdtjktuku fgjnjs",
  },
  {
    id: 3,
    name: "李某某",
    birth: "1020322",
    identityNumber: "A111777277",
    phone: "0944444444",
    vaccineType: "AZ",
    remark: "dhhthrjyjku fgjnjs",
  },
  {
    id: 4,
    name: "陳某某",
    birth: "800101",
    identityNumber: "A123456777",
    phone: "0920222999",
    vaccineType: "AZ",
    remark:
      "dhhthrjy jdtjktuku fgjnjs dhhthrjy jdtjktuku fgjnjs dhhthrjy jdtjktuku fgjnjs dhhthrjy jdtjktuku fgjnjs",
  },
  {
    id: 5,
    name: "陳某某陳某某",
    birth: "800101",
    identityNumber: "A123456777",
    phone: "0920222999",
    vaccineType: "AZ",
    remark: "dhhthrjy jdtjktuku fgjnjs",
  },
]

class EditReservation extends Component {
  constructor(props) {
    super()

    this.state = {
      reservedList: reservedListFromAPI,
    }
  }

  deleteItem = (event) => {
    const targetParentDom =
      event.target.parentNode.parentNode

    const deleteItemId = Number(
      targetParentDom.dataset.id
    )

    const result = this.state.reservedList.filter(
      (item) => item.id !== deleteItemId
    )

    this.setState({
      reservedList: result,
    })
  }

  render() {
    const {
      props: { showElement },
    } = this

    return showElement ? (
      <div className="edit-reservation__wrap padding-b-30">
        <div className="d-flex justify-content-center align-self-center">
          <div className="info padding-t-30 padding-b-30 padding-l-20">
            <h1 className="title fz-30 fz-bold padding-b-20">
              編輯預約名單
            </h1>
          </div>
        </div>
        <TableList
          dataList={this.state.reservedList}
          deleteItem={this.deleteItem}
        />
      </div>
    ) : null
  }
}

export default EditReservation
