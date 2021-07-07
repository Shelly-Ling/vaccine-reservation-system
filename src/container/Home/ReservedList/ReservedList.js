import "./ReservedList.scss"
import React, { useState } from "react"
import TableList from "../../../component/TableList/TableList"
import SearchBar from "../../../component/SearchBar/SearchBar"

function ReservedList() {
  return (
    <div className="reserved-list__wrap contain-width margin-l-auto margin-r-auto">
      <div className="info padding-t-30 padding-b-30">
        <h1 className="title fz-35 fz-bold">
          已預約名單
        </h1>
        <p className="padding-t-10">預約疫苗接種請注意</p>
        <ul className="padding-l-20">
          <li className="fz-22">
            *
            目前開放預約接種對象，請依指揮中心公布之可接種對象為主。
          </li>
          <li>
            * 請詳閱
            <a
              title="預約疫苗接種注意事項"
              href="http://www.leehospital.com.tw/%E7%B6%B2%E8%B7%AF%E6%8E%9B%E8%99%9F/Covid19.asp"
            >
              接種注意事項細則
            </a>
          </li>
        </ul>
      </div>
      <TableList searchBarComponent={<SearchBar />} />
    </div>
  )
}

export default ReservedList
