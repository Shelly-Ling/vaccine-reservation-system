import React, { Fragment, useState } from "react"
import "./SearchBar.scss"

/**
 * @description 清單列表型的表格
 */

function SearchBar() {
  return (
    <Fragment>
      <form className="search-content padding-b-20">
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
            id="search-input"
            className="input-style"
          />
        </div>
        <div className="display-inline-block margin-l-10">
          <select
            type="text"
            name="conditionSelect"
            id="condition-search"
            className="input-style"
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
        <input
          type="submit"
          className="btn-submit margin-l-10 fz-20 input-submit-style btn-color-pink-white "
          id="submit"
        />
        <button className="btn-submit margin-l-10 fz-20 input-submit-style btn-color-pink-white">
          重置
        </button>
      </form>
    </Fragment>
  )
}

export default SearchBar
