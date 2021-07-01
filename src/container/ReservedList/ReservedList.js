import "./ReservedList.scss"
import React, { Component } from "react"
import TableList from "../../component/TableList/TableList"
import SearchBar from "../../component/SearchBar/SearchBar"

class ReservedList extends Component {
  static defaultProps = {
    reservedList: [],
    pageName: "",
  }
  constructor(props) {
    super(props)

    this.state = {
      reservedList: this.props.reservedList,
      filterReservedList: [],
      searchKeyword: "",
      conditionSelect: "",
    }
  }

  filterListBySearch = (keyword, conditionSelect) => {
    console.log(keyword, conditionSelect)

    if (keyword.length === 0) {
      alert("請輸入關鍵字")
    } else if (
      keyword.length !== 0 &&
      conditionSelect.length === 0
    ) {
      alert("請選擇條件")
    } else {
      const filterReservedList =
        this.props.reservedList.filter((item) => {
          return item[conditionSelect].match(keyword)
        })

      this.setState({
        searchKeyword: keyword,
        conditionSelect: conditionSelect,
        reservedList: filterReservedList,
      })

      console.log(
        "filterReservedList",
        filterReservedList
      )
    }
  }

  render() {
    const {
      props: { showElement },
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
          children={
            <SearchBar
              filterListBySearch={this.filterListBySearch}
            />
          }
          reservedList={
            this.state.filterReservedList.length !== 0
              ? this.state.filterReservedList
              : this.props.reservedList
          }
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
