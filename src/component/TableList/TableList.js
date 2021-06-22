import React, { Component } from "react"
import "./TableList.scss"

/**
 * @description 清單列表型的表格
 */

export class TableList extends Component {
  static defaultProps = {
    dataList: [],
    showEditButton: true,
  }
  deleteItem = () => {
    console.log("deleteItem")
  }

  render() {
    const {
      props: { dataList },
    } = this

    return dataList.length ? (
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
        <div className="main margin-l-50 margin-r-50">
          <table className="table-border-less table-striped-pink-gray">
            <thead>
              <tr>
                <td className="name">姓名</td>
                <td>生日</td>
                <td>身分證字號</td>
                <td>手機</td>
                <td>疫苗種類</td>
                <td className="remark">備註</td>
                {this.props.showEditButton ? (
                  <td className="edit-row">編輯</td>
                ) : null}
              </tr>
            </thead>
            <tbody>
              {this.props.dataList.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.birth}</td>
                  <td>{item.identityNumber}</td>
                  <td>{item.phone}</td>
                  <td>{item.vaccineType}</td>
                  <td>{item.remark}</td>
                  {this.props.showEditButton ? (
                    <td>
                      <button
                        className="margin-l-10 fz-20 delete"
                        id="delete"
                        onClick={this.deleteItem}
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
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <div className="padding-30 text-info fz-30 fz-bold text-align-center">
        尚無資料可顯示
      </div>
    )
  }
}

export default TableList
