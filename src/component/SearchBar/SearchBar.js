import React, { Component } from "react"
import "./SearchBar.scss"

/**
 * @description 清單列表型的表格
 */

export class SearchBar extends Component {
  render() {
    return (
      <form className="search-content margin-l-80 margin-b-20">
        <div className="display-inline-block">
          <label
            className="padding-r-20"
            htmlFor="search-input"
          >
            條件搜尋
          </label>
          <input
            type="text"
            id="search-input"
            className="input-style"
          />
        </div>
        <div className="display-inline-block margin-l-10">
          <select
            name="condition-search"
            id="condition-search"
            className="input-style"
          >
            <option value="id">身分證號</option>
            <option value="name">姓名</option>
            <option value="birthday">生日</option>
            <option value="phone">手機號碼</option>
            <option value="phone">疫苗種類</option>
          </select>
        </div>
        <input
          type="submit"
          className="btn-submit margin-l-10 fz-20 input-submit-style   btn-color-pink-white "
          id="submit"
        />
      </form>
    )
  }
}

export default SearchBar
