import "./Header.scss"
import React, { useContext } from "react"
import {
  PageDataContext,
  NowPageIdContext,
} from "../../container/Home/Home"

function Header() {
  const pageData = useContext(PageDataContext)
  const nowPageId = useContext(NowPageIdContext)

  const objectValueIndex = 1

  return (
    <div className="header__wrap">
      <h1 className="letter-spacing-30 fz-40 fz-bold-800 padding-b-10 padding-t-10">
        疫苗預約平台
      </h1>
      <nav className="navbar padding-t-15 padding-b-15">
        <ul className="navbar__btns clearfix">
          {Object.entries(pageData).map((item) => {
            return (
              <li
                key={item[objectValueIndex].id}
                className="float-left"
              >
                <button
                  className={`btn btn-color-pink-gray letter-spacing-5 padding-10 border-radius-12 fz-bold ${
                    item[objectValueIndex].id ===
                    nowPageId
                      ? "btn-color-pink-gray-active"
                      : ""
                  }`}
                >
                  {item[objectValueIndex].title}
                </button>
              </li>
            )
          })}
          {/* {Object.entries(pageData).map((item) =>
            item.map((page) => {
              return (
                <li key={page.id} className="float-left">
                  <button className="btn btn-color-pink-gray letter-spacing-5 padding-10 border-radius-12 fz-bold btn-color-pink-gray-active">
                    {page.title}
                  </button>
                </li>
              )
            })
          )} */}
          {/* <li className="float-left">
            <button className="btn btn-color-pink-gray letter-spacing-5 padding-10 border-radius-12 fz-bold">
              已預約名單
            </button>
          </li>
          <li className="float-left">
            <button className="btn btn-color-pink-gray letter-spacing-5 padding-10 border-radius-12 fz-bold">
              編輯預約名單
            </button>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Header
