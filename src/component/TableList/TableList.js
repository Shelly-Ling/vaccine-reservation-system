import React, { useContext, useState } from "react"
import { AppStateContext } from "../../container/Home/Home"
import { AppDispatchContext } from "../../container/Home/Home"

import "./TableList.scss"

/**
 * @description 清單列表型的表格
 */

function TableList({ searchBarComponent }) {
  const { globalState } = useContext(AppStateContext)
  const { dispatch } = useContext(AppDispatchContext)

  const list = globalState.filterReservedList.length
    ? globalState.filterReservedList
    : globalState.reservedList

  function onDeleteBtnClick(targetId) {
    const result = globalState.reservedList.filter(
      (item) => {
        return item.identityNumber !== targetId
      }
    )

    localStorage.setItem(
      "reservedList",
      JSON.stringify(result)
    )

    const filterResult =
      globalState.filterReservedList.filter((item) => {
        return item.identityNumber !== targetId
      })

    dispatch({
      type: "deleteItem",
      payload: {
        result,
        filterResult,
      },
    })
  }

  return list.length ? (
    <div className="table-list__wrap">
      {searchBarComponent}
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
            {globalState.nowPageId ===
            globalState.pageData.editReservation.id ? (
              <td className="edit-row">編輯</td>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
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
              {globalState.nowPageId ===
              globalState.pageData.editReservation.id ? (
                <td>
                  <button
                    className="margin-l-10 fz-20 delete"
                    onClick={() =>
                      onDeleteBtnClick(
                        item.identityNumber
                      )
                    }
                  >
                    刪除
                  </button>
                  <button
                    className="margin-l-10 fz-20 edit"
                    onClick={() =>
                      dispatch({
                        type: "onEditBtnClick",
                        payload: item.identityNumber,
                      })
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
  ) : (
    <div className="padding-30 text-info fz-30 fz-bold text-align-center border-radius-30">
      尚無資料可顯示
    </div>
  )
}

export default TableList
