import "./Header.scss"

import React, { Component } from "react"

class Header extends Component {
  static defaultProps = {
    onNavLinkClick: () => {},
    updateReservedListData: () => {},
    nowPageId: -1,
    pageData: {},
  }
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.nowPageId !== this.props.nowPageId) {
      this.setState(
        {
          nowPageId: this.props.nowPageId,
        },
        () => {
          this.props.updateReservedListData()
        }
      )
    }
  }

  render() {
    const {
      props: { onNavLinkClick, nowPageId, pageData },
    } = this
    return (
      <div className="header__wrap">
        <h1 className="text-align-center letter-spacing-20 fz-35 fz-bold-800 padding-b-10 padding-t-10">
          疫苗預約平台
        </h1>
        <nav className="navbar padding-t-15 padding-b-15">
          <ul className="navbar__btns clearfix">
            {Object.entries(pageData).map(
              ([key, value]) => {
                return (
                  <li
                    key={value.id}
                    className="float-left"
                  >
                    <button
                      onClick={(event) =>
                        onNavLinkClick(event)
                      }
                      data-id={value.id}
                      title="疫苗預約"
                      className={`btn btn-color-pink-gray letter-spacing-5 padding-10 margin-5 border-radius-12 fz-bold fz-20 ${
                        value.id === nowPageId
                          ? "btn-color-pink-gray-active"
                          : ""
                      }`}
                    >
                      {value.title}
                    </button>
                  </li>
                )
              }
            )}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
