import React, { Component } from "react"
import "./TableList.scss"

/**
 * @description 清單列表型的表格
 */

export class TableList extends Component {
  render() {
    return (
      <div className="table-list__wrap">
        <table>
          <thead>
            <tr>
              <td>姓名</td>
              <td>生日</td>
              <td>身分證字號</td>
              <td>手機</td>
              <td>疫苗種類</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>陳某某</td>
              <td>800101</td>
              <td>A123456777</td>
              <td>0911222222</td>
              <td>AZ</td>
            </tr>
            <tr>
              <td>陳某某</td>
              <td>800101</td>
              <td>A123456777</td>
              <td>0911222222</td>
              <td>AZ</td>
            </tr>
            <tr>
              <td>陳某某</td>
              <td>800101</td>
              <td>A123456777</td>
              <td>0911222222</td>
              <td>AZ</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableList
