import "./Header.scss"
import React, { useState } from "react"

function Header() {
  return (
    <div className="header__wrap">
      <h1 className="letter-spacing-30 fz-40 fz-bold-800 padding-b-10 padding-t-10">
        疫苗預約平台
      </h1>
      <nav className="navbar padding-t-15 padding-b-15">
        <ul className="navbar__btns clearfix">
          <li className="float-left">
            <button className="btn btn-color-pink-gray letter-spacing-5 padding-10 border-radius-12 fz-bold btn-color-pink-gray-active">
              預約申請
            </button>
          </li>
          <li className="float-left">
            <button className="btn btn-color-pink-gray letter-spacing-5 padding-10 border-radius-12 fz-bold">
              已預約名單
            </button>
          </li>
          <li className="float-left">
            <button className="btn btn-color-pink-gray letter-spacing-5 padding-10 border-radius-12 fz-bold">
              編輯預約名單
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
