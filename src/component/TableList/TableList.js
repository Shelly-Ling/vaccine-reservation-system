import React, { useState } from "react"
import "./TableList.scss"

/**
 * @description 清單列表型的表格
 */

function TableList({ searchBarComponent }) {
  const reservedList = [
    {
      name: "陳某某",
      birth: "0800101",
      identityNumber: "A000002222",
      phone: "0000000000",
      vaccineType: "嬌生",
      dayForVaccination: "2021-07-09",
      remark: "dhhthrjy ",
    },
    {
      name: "王某",
      birth: "0800101",
      identityNumber: "A111111111",
      phone: "0000000000",
      vaccineType: "嬌生",
      dayForVaccination: "2021-07-09",
      remark:
        "dhhthrjy  dhhthrjydhhthrjy  dhhthrjydhhthrjy  dhhthrjydhhthrjy  dhhthrjy",
    },
  ]

  return (
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
              <td className="edit-row">編輯</td>
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
                <td>
                  <button className="margin-l-10 fz-20 delete">
                    刪除
                  </button>
                  <button className="margin-l-10 fz-20 edit">
                    編輯
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="padding-30 text-info fz-30 fz-bold text-align-center">
        尚無資料可顯示
      </div> */}
    </div>
  )
}

export default TableList
