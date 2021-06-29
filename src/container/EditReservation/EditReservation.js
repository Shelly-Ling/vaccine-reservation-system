import "./EditReservation.scss"
import React, { Component } from "react"
import PropTypes from "prop-types"
import TableList from "../../component/TableList/TableList"
import SearchBar from "../../component/SearchBar/SearchBar"

class EditReservation extends Component {
  static defaultProps = {
    deleteItem: () => {},
  }
  constructor(props) {
    super(props)

    this.state = {
      componentReceiveProps: false,
      reservedList: this.props.reservedList,
    }
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
          dataList={this.props.reservedList}
          deleteItem={this.props.deleteItem}
          children={<SearchBar />}
        />
      </div>
    ) : null
  }
}

export default EditReservation
