import "./Header.scss"

import React, { Component } from "react"

class Header extends Component {
  static defaultProps = {
    changePage: () => {},
    updateReservedListData: () => {},
    pageData: {
      reservationForm: {
        id: 1,
        pageName: "reservation-form",
        title: "預約申請",
      },
      reservedList: {
        id: 2,
        pageName: "reserved-list",
        title: "已預約名單",
      },
      editReservation: {
        id: 3,
        pageName: "edit-reservation",
        title: "編輯預約名單",
      },
    },
  }
  constructor(props) {
    super(props)

    this.state = {
      currentPageId:
        this.props.pageData.reservationForm.id,
    }
  }

  onNavLinkClick = (e) => {
    console.log("onNavLinkClick")
    const targetId = Number(e.target.id)
    this.setState({ currentPageId: targetId })
    this.props.changePage(targetId)
    this.props.updateReservedListData()
  }

  render() {
    return (
      <div className="header__wrap">
        <h1 className="text-align-center letter-spacing-20 fz-35 fz-bold-800 padding-b-10 padding-t-10">
          疫苗預約平台
        </h1>
        <nav className="navbar padding-t-15 padding-b-15">
          <ul className="navbar__btns clearfix">
            <li className="float-left">
              <button
                onClick={this.onNavLinkClick}
                id={
                  this.props.pageData.reservationForm.id
                }
                title="疫苗預約"
                className={`btn btn-color-pink-gray letter-spacing-5 padding-10 margin-5 border-radius-12 fz-bold fz-20 ${
                  this.props.pageData.reservationForm
                    .id === this.state.currentPageId
                    ? "btn-color-pink-gray-active"
                    : ""
                }`}
              >
                {
                  this.props.pageData.reservationForm
                    .title
                }
              </button>
            </li>
            <li className="float-left">
              <button
                onClick={this.onNavLinkClick}
                id={this.props.pageData.reservedList.id}
                title="疫苗預約"
                className={`btn btn-color-pink-gray letter-spacing-5 padding-10 margin-5 border-radius-12 fz-bold fz-20 ${
                  this.props.pageData.reservedList.id ===
                  this.state.currentPageId
                    ? "btn-color-pink-gray-active"
                    : ""
                }`}
              >
                {this.props.pageData.reservedList.title}
              </button>
            </li>
            <li className="float-left">
              <button
                onClick={this.onNavLinkClick}
                id={
                  this.props.pageData.editReservation.id
                }
                title="疫苗預約"
                className={`btn btn-color-pink-gray letter-spacing-5 padding-10 margin-5 border-radius-12 fz-bold fz-20 ${
                  this.props.pageData.editReservation
                    .id === this.state.currentPageId
                    ? "btn-color-pink-gray-active"
                    : ""
                }`}
              >
                {
                  this.props.pageData.editReservation
                    .title
                }
              </button>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
