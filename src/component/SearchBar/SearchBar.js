import React, {
  Fragment,
  useState,
  useContext,
} from "react"
import { AppStateContext } from "../../container/Home/Home"
import { AppDispatchContext } from "../../container/Home/Home"

import "./SearchBar.scss"

/**
 * @description 清單列表型的表格
 */

function SearchBar() {
  const AppData = useContext(AppStateContext)
  const AppDispatch = useContext(AppDispatchContext)

  const [searchKeywords, setSearchKeywords] = useState({
    searchKeyword: "",
    conditionSelect: "",
  })

  function handleSearchInputChange(event) {
    const { target } = event
    const name = target.name
    const value = target.value.trim()

    setSearchKeywords({
      ...searchKeywords,
      [name]: value,
    })
  }

  function onSearchResetBtnClick() {
    setSearchKeywords({
      searchKeyword: "",
      conditionSelect: "",
    })
    AppDispatch.dispatch({
      type: "getReservedListData",
    })
  }

  return (
    <Fragment>
      <div className="search-content padding-b-20">
        <div className="display-inline-block">
          <label
            className="padding-r-20"
            htmlFor="search-input"
          >
            關鍵字搜尋
          </label>
          <input
            type="text"
            name="searchKeyword"
            className="search-input input-style"
            value={searchKeywords.searchKeyword}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="display-inline-block margin-l-10">
          <select
            type="text"
            name="conditionSelect"
            className="condition-search input-style"
            value={searchKeywords.conditionSelect}
            onChange={handleSearchInputChange}
          >
            <option>--請選擇--</option>
            <option value="identityNumber">
              身分證號
            </option>
            <option value="name">姓名</option>
            <option value="birth">生日</option>
            <option value="phone">手機號碼</option>
            <option value="vaccineType">疫苗種類</option>
          </select>
        </div>
        <button
          className="btn-submit margin-l-10 fz-20 input-submit-style btn-color-pink-white "
          onClick={() =>
            AppDispatch.dispatch({
              type: "onSearchSubmitBtnClick",
              payload: searchKeywords,
            })
          }
        >
          提交
        </button>
        <button
          className="btn-reset margin-l-10 fz-20 input-submit-style btn-color-pink-white"
          onClick={onSearchResetBtnClick}
        >
          重置
        </button>
      </div>
    </Fragment>
  )
}

export default SearchBar
