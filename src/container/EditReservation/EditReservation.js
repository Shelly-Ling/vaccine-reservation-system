import "./EditReservation.scss"

import React, { Component } from "react"
import TableList from "../../component/TableList/TableList"

class EditReservation extends Component {
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
        <TableList />
      </div>
    ) : null
  }
}

export default EditReservation
