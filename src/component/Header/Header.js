import "./Header.scss"

import React, { Component } from "react"

const pageData = [
  {
    id: 1,
    pageName: "reservation-form",
    title: "預約申請",
  },
  {
    id: 2,
    pageName: "reserved-list",
    title: "已預約名單",
  },
  {
    id: 3,
    pageName: "edit-reservation",
    title: "編輯預約名單",
  },
]
class Header extends Component {
  static defaultProps = {
    pageId: 1,
    changePage: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      currentPageId: this.pageId ? this.pageId : 1,
    }
  }

  onNavLinkClick = (e) => {
    const targetId = Number(e.target.id)
    this.setState({ currentPageId: targetId })
    this.props.changePage(targetId)
  }

  render() {
    return (
      <div className="header__wrap">
        <h1 className="text-align-center letter-spacing-20 fz-35 fz-bold-800 padding-b-10 padding-t-10">
          疫苗預約平台
        </h1>
        <nav className="navbar padding-t-15 padding-b-15">
          <ul className="navbar__btns clearfix">
            {pageData.map((page) => (
              <li key={page.id} className="float-left">
                <button
                  onClick={this.onNavLinkClick}
                  id={page.id}
                  title="疫苗預約"
                  className={`btn btn-color-pink-gray letter-spacing-5 padding-10 margin-5 border-radius-12 fz-bold fz-20 ${
                    page.id === this.state.currentPageId
                      ? "btn-color-pink-gray-active"
                      : ""
                  }`}
                >
                  {page.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
