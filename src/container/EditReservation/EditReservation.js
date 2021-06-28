import "./EditReservation.scss"
import React, { Component } from "react"
import TableList from "../../component/TableList/TableList"
import SearchBar from "../../component/SearchBar/SearchBar"
class EditReservation extends Component {
  constructor(props) {
    super()

    this.state = {
      dataFetchingIsDone: false,
      reservedList: [],
    }
  }

  componentDidMount() {
    this.updateReservedListData()
  }

  getReservedListData() {
    return (
      JSON.parse(localStorage.getItem("reservedList")) ||
      []
    )
  }

  updateReservedListData() {
    const reservedListData = this.getReservedListData()
    if (this.state.dataFetchingIsDone === false) {
      this.setState({
        reservedList: reservedListData,
        dataFetchingIsDone: true,
      })
    }
  }

  deleteItem = (event) => {
    const targetParentDom =
      event.target.parentNode.parentNode

    const deleteItemId = targetParentDom.dataset.id

    const result = this.state.reservedList.filter(
      (item) => item.identityNumber !== deleteItemId
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
          children={<SearchBar />}
        />
      </div>
    ) : null
  }
}

export default EditReservation
