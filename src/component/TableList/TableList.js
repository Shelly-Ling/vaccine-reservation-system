import React, { Component } from "react"
import "./TableList.scss"

/**
 * @description 清單列表型的表格
 */

export class TableList extends Component {
  static defaultProps = {
    reservedList: [],
    showEditButton: true,
    deleteItem: () => {},
    onEditBtnClick: () => {},
    searchBarComponent: null,
  }

  render() {
    const {
      props: { reservedList },
    } = this

    return reservedList.length ? (
      <div className="table-list__wrap margin-0-auto">
        {this.props.searchBarComponent}
        <div className="main margin-l-50 margin-r-50">
          <table className="table-border-less table-striped-pink-gray">
            <thead>
              <tr>
                <td className="name">姓名</td>
                <td>生日</td>
                <td className="identity-number">
                  身分證字號
                </td>
                <td>手機</td>
                <td>疫苗種類</td>
                <td className="date">日期</td>
                <td className="remark">備註</td>
                {this.props.showEditButton ? (
                  <td className="edit-row">編輯</td>
                ) : null}
              </tr>
            </thead>
            <tbody>
              {this.props.reservedList.map((item) => (
                <tr
                  data-id={item.identityNumber}
                  key={item.identityNumber}
                >
                  <td>{item.name}</td>
                  <td>{item.birth}</td>
                  <td>{item.identityNumber}</td>
                  <td>{item.phone}</td>
                  <td>{item.vaccineType}</td>
                  <td>{item.dayForVaccination}</td>
                  <td>{item.remark}</td>
                  {this.props.showEditButton ? (
                    <td>
                      <button
                        className="margin-l-10 fz-20 delete"
                        id="delete"
                        onClick={this.props.deleteItem}
                      >
                        刪除
                      </button>
                      <button
                        className="margin-l-10 fz-20 edit"
                        id="edit"
                        data-id={item.identityNumber}
                        onClick={
                          this.props.onEditBtnClick
                        }
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
