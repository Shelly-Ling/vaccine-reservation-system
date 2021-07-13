import "./Header.scss"
import React, { useContext } from "react"
import { AppStateContext } from "../../container/Home/Home"
import { AppDispatchContext } from "../../container/Home/Home"

function Header() {
  const { globalState } = useContext(AppStateContext)
  const { dispatch } = useContext(AppDispatchContext)

  return (
    <div className="header__wrap">
      <h1 className="letter-spacing-30 fz-40 fz-bold-800 padding-b-10 padding-t-10">
        疫苗預約平台
      </h1>
      <nav className="navbar padding-t-15 padding-b-15">
        <ul className="navbar__btns clearfix">
          {Object.entries(globalState.pageData).map(
            ([key, value]) => {
              return (
                <li key={value.id} className="float-left">
                  <button
                    className={`btn btn-color-pink-gray letter-spacing-5 padding-10 border-radius-12 fz-bold ${
                      value.id === globalState.nowPageId
                        ? "btn-color-pink-gray-active"
                        : ""
                    }`}
                    onClick={() =>
                      dispatch({
                        type: "setNowPageId",
                        payload: value.id,
                      })
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
