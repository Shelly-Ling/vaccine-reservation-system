import React, {
  Fragment,
  useState,
  useContext,
} from "react"
import { AppDispatchContext } from "../../container/Home/Home"

import "./SearchBar.scss"

/**
 * @description 清單列表型的表格
 */

function SearchBar() {
  const { dispatch } = useContext(AppDispatchContext)

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
    dispatch({
      type: "onSearchResetBtnClick",
      payload: searchKeywords,
    })
  }

  function onSearchSubmitBtnClick() {
    if (
      searchKeywords.searchKeyword === "" ||
      searchKeywords.conditionSelect === ""
    ) {
      alert("關鍵字欄位或篩選條件皆不可為空")
    } else {
      dispatch({
        type: "filterReservedList",
        payload: searchKeywords,
      })
    }
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
          onClick={onSearchSubmitBtnClick}
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
