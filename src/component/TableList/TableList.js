import React, { useContext } from "react"
import "./TableList.scss"
import {
  ReservedListContext,
  NowPageIdContext,
  PageDataContext,
} from "../../container/Home/Home"

/**
 * @description 清單列表型的表格
 */

function TableList({ searchBarComponent }) {
  const pageData = useContext(PageDataContext)
  const nowPageId = useContext(NowPageIdContext)
  const reservedList = useContext(ReservedListContext)

  return reservedList ? (
    <div className="table-list__wrap">
      {searchBarComponent}
      <div className="main">
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
              {nowPageId ===
              pageData.editReservation.id ? (
                <td className="edit-row">編輯</td>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {reservedList.map((item) => (
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
                {nowPageId ===
                pageData.editReservation.id ? (
                  <td>
                    <button className="margin-l-10 fz-20 delete">
                      刪除
                    </button>
                    <button className="margin-l-10 fz-20 edit">
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

export default TableList
