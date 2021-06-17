import React, { Component } from "react"
import "./TableList.scss"

/**
 * @description 清單列表型的表格
 */

export class TableList extends Component {
  render() {
    return (
      <div className="table-list__wrap">
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
        <div className="main overflow-x-scroll margin-l-50 margin-r-50">
          <table>
            <thead>
              <tr>
                <td>姓名</td>
                <td>生日</td>
                <td>身分證字號</td>
                <td>手機</td>
                <td>疫苗種類</td>
                <td>備註</td>
                <td>編輯</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>陳某某</td>
                <td>800101</td>
                <td>A123456777</td>
                <td>0911222222</td>
                <td>AZ</td>
                <td>-</td>
                <td>
                  <button
                    className="margin-l-10 fz-20 delete"
                    id="delete"
                  >
                    刪除
                  </button>
                  <button
                    className="margin-l-10 fz-20 edit"
                    id="edit"
                  >
                    編輯
                  </button>
                </td>
              </tr>
              <tr>
                <td>陳某某</td>
                <td>800101</td>
                <td>A123456777</td>
                <td>0911222222</td>
                <td>AZ</td>
                <td>-</td>
                <td>
                  <button
                    className="margin-l-10 fz-20 delete"
                    id="delete"
                  >
                    刪除
                  </button>
                  <button
                    className="margin-l-10 fz-20 edit"
                    id="edit"
                  >
                    編輯
                  </button>
                </td>
              </tr>
              <tr>
                <td>陳某某</td>
                <td>800101</td>
                <td>A123456777</td>
                <td>0911222222</td>
                <td>AZ</td>
                <td>-</td>
                <td>
                  <button
                    className="margin-l-10 fz-20 delete"
                    id="delete"
                  >
                    刪除
                  </button>
                  <button
                    className="margin-l-10 fz-20 edit"
                    id="edit"
                  >
                    編輯
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TableList
