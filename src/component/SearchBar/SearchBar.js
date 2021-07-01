import React, { Component } from "react"
import "./SearchBar.scss"

/**
 * @description 清單列表型的表格
 */

export class SearchBar extends Component {
  static defaultProps = {
    filterListBySearch: () => {},
  }
  constructor(props) {
    super(props)
    this.state = {
      searchKeyword: "",
      conditionSelect: "",
    }
  }
  handleSearchSubmit = (event) => {
    event.preventDefault()
    const keyword = this.state.searchKeyword
    const conditionSelect = this.state.conditionSelect
    this.props.filterListBySearch(
      keyword,
      conditionSelect
    )
  }

  handleSearchInputChange = (event) => {
    const { target } = event
    const name = target.name
    const value = target.value

    this.setState(
      {
        [name]: value,
      },
      () => {
        // console.log(this.state)
      }
    )
  }

  render() {
    return (
      <form
        className="search-content margin-l-80 margin-b-20"
        onSubmit={this.handleSearchSubmit}
      >
        <div className="display-inline-block">
          <label
            className="padding-r-20"
            htmlFor="search-input"
          >
            條件搜尋
          </label>
          <input
            type="text"
            name="searchKeyword"
            id="search-input"
            className="input-style"
            value={this.state.searchKeyword}
            onChange={this.handleSearchInputChange}
          />
        </div>
        <div className="display-inline-block margin-l-10">
          <select
            type="text"
            name="conditionSelect"
            id="condition-search"
            className="input-style"
            value={this.state.conditionSelect}
            onChange={this.handleSearchInputChange}
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
          className="btn-submit margin-l-10 fz-20 input-submit-style   btn-color-pink-white "
          id="submit"
        />
      </form>
    )
  }
}

export default SearchBar
