import "./Header.scss"
import "../../scss/_utilities/_typography.scss"
import "../../scss/_utilities/_common.scss"
import "../../scss/_utilities/_border.scss"
import "../../scss/_utilities/_displayGeneral.scss"
import "../../scss/_utilities/_float.scss"
import "../../scss/_utilities/_spacing.scss"
import "../../scss/_utilities/_text.scss"
import React, { Component } from "react"

class Header extends Component {
  render() {
    return (
      <div className="header__wrap">
        <h1 className="text-align-center letter-spacing-30 fz-40 fz-bold-800 padding-b-10 padding-t-10">
          疫苗預約平台
        </h1>
        <nav className="navbar padding-t-15 padding-b-15">
          <ul className="navbar__btns clearfix">
            <li className="float-left">
              <a
                href=""
                title="疫苗預約"
                className="btn btn-pink letter-spacing-5 padding-10 margin-20 border-radius-12 fz-bold btn-pink-active"
                active-white
              >
                疫苗預約
              </a>
            </li>
            <li className="float-left ">
              <a
                href=""
                title="已預約名單"
                className="btn btn-pink letter-spacing-5 padding-10 margin-20 border-radius-12 fz-bold"
              >
                已預約名單
              </a>
            </li>
            <li className="float-left">
              <a
                href=""
                title="編輯預約名單"
                className="btn btn-pink letter-spacing-5 padding-10 margin-20 border-radius-12 fz-bold"
              >
                編輯預約名單
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
