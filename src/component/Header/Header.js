import "./Header.scss"
import React, { useContext } from "react"
import { AppContext } from "../../container/Home/Home"

function Header() {
  const AppData = useContext(AppContext)
  console.log("AppData", AppData)

  return (
    <div className="header__wrap">
      <h1 className="letter-spacing-30 fz-40 fz-bold-800 padding-b-10 padding-t-10">
        疫苗預約平台
      </h1>
      <nav className="navbar padding-t-15 padding-b-15">
        <ul className="navbar__btns clearfix">
          {Object.entries(AppData.pageData).map(
            ([key, value]) => {
              return (
                <li key={value.id} className="float-left">
                  <button
                    className={`btn btn-color-pink-gray letter-spacing-5 padding-10 border-radius-12 fz-bold ${
                      value.id === AppData.nowPageId
                        ? "btn-color-pink-gray-active"
                        : ""
                    }`}
                    onClick={() =>
                      AppData.onNavLinkClick(value.id)
                    }
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

export default Header
