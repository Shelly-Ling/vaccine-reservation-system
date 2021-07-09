import "./EditReservation.scss"
import React, { useContext } from "react"
import TableList from "../../../component/TableList/TableList"
import SearchBar from "../../../component/SearchBar/SearchBar"
import { AppContext } from "../Home"
import VaccineReservationForm from "../../../component/VaccineReservationForm/VaccineReservationForm"

function EditReservation() {
  const AppData = useContext(AppContext)
  return (
    <div className="edit-reservation__wrap contain-width margin-l-auto margin-r-auto padding-b-30">
      <h1 className="title fz-35 fz-bold padding-t-30 padding-b-20">
        編輯預約名單
      </h1>

      <TableList searchBarComponent={<SearchBar />} />

      {AppData.globalState.isEditing ? (
        <div className="modal edit-modal margin-0-auto padding-10 border-radius-50 ">
          <VaccineReservationForm
            title="編輯預約資訊表"
            className="form margin-0-auto"
          />
        </div>
      ) : null}
    </div>
  )
}

export default EditReservation
