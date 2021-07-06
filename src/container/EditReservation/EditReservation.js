import "./EditReservation.scss"
import React, { useState } from "react"
import TableList from "../../component/TableList/TableList"
import SearchBar from "../../component/SearchBar/SearchBar"
import VaccineReservationForm from "../../component/VaccineReservationForm/VaccineReservationForm"

function EditReservation() {
  return (
    <div className="edit-reservation__wrap padding-b-30">
      <div className="info padding-t-30 padding-b-30 padding-l-20">
        <h1 className="title fz-bold padding-b-20">
          編輯預約名單
        </h1>
      </div>

      <TableList searchBarComponent={<SearchBar />} />
      {/* <div className="modal edit-modal margin-0-auto padding-10 border-radius-50 ">
        <VaccineReservationForm
          title="編輯預約資訊表"
          className="form margin-0-auto"
        />
      </div> */}
    </div>
  )
}

export default EditReservation
