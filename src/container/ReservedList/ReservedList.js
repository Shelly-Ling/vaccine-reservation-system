import "./ReservedList.scss"
import React, { Component } from "react"
import TableList from "../../component/TableList/TableList"

const reservedList = [
  {
    id: 1,
    name: "陳某某",
    birth: "800101",
    identityNumber: "A123456777",
    phone: "0920222999",
    vaccineType: "AZ",
    remark: "dhhthrjy jdtjktuku fgjnjs",
  },
  {
    id: 2,
    name: "王某",
    birth: "1020701",
    identityNumber: "H223455432",
    phone: "0933333333",
    vaccineType: "AZ",
    remark: "dhhthrjy jdtjktuku fgjnjs",
  },
  {
    id: 3,
    name: "李某某",
    birth: "1020322",
    identityNumber: "A111777277",
    phone: "0944444444",
    vaccineType: "AZ",
    remark: "dhhthrjyjku fgjnjs",
  },
]

class ReservedList extends Component {
  render() {
    const {
      props: { showElement, pageName },
    } = this

    return showElement ? (
      <div className="reserved-list__wrap padding-b-30">
        <div className="d-flex justify-content-center align-self-center">
          <div className="info padding-t-30 padding-b-30 padding-l-20">
            <h1 className="title fz-30 fz-bold">
              已預約名單
            </h1>
            <ul className="padding-l-50 padding-b-20 fz-18">
              <li>預約疫苗接種請注意</li>
              <li>
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
        </div>
        <TableList
          dataList={reservedList}
          showEditButton={
            this.props.pageName === "reserved-list"
              ? false
              : true
          }
        />
      </div>
    ) : null
  }
}

export default ReservedList
