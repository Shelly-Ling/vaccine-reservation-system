import "./EditReservation.scss"
import React, { Component } from "react"
import TableList from "../../component/TableList/TableList"
import SearchBar from "../../component/SearchBar/SearchBar"
import VaccineReservationForm from "../../component/VaccineReservationForm/VaccineReservationForm"

class EditReservation extends Component {
  static defaultProps = {
    pageData: {},
    reservedList: [],
    deleteItem: () => {},
    handleEditItemSubmit: () => {},
    updateReservedListData: () => {},
  }
  constructor(props) {
    super(props)

    this.state = {
      nowPageId: -1,
      componentReceiveProps: false,
      isEditing: false,
      filterReservedList: [],
      keywordFromSearchBar: {
        searchKeyword: "",
        conditionSelect: "",
      },
      userEditingData: {
        name: "",
        birth: "",
        identityNumber: "",
        phone: "",
        vaccineType: "",
        dayForVaccination: "",
        remark: "",
      },
    }
  }

  componentDidMount() {
    this.setState({
      nowPageId: this.props.pageData.editReservation.id,
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.reservedList !== this.props.reservedList
    ) {
      this.setState(
        {
          reservedList: this.props.reservedList,
        },
        () => {
          this.updateFilterListBySearch()
        }
      )
    }
  }

  updateFilterListBySearch = () => {
    const { searchKeyword, conditionSelect } =
      this.state.keywordFromSearchBar

    if (searchKeyword && conditionSelect) {
      this.filterListBySearch(
        searchKeyword,
        conditionSelect
      )
    }
  }

  onEditBtnClick = (event) => {
    const editItemId = event.target.dataset.id

    const data = this.props.reservedList.find(
      (item) => item.identityNumber === editItemId
    )

    this.setState({
      userEditingData: { ...data },
      isEditing: true,
    })
  }

  changeIsEditingStateToFalse = () => {
    this.setState({
      isEditing: false,
    })
  }

  onCancelEditBtnClick = () => {
    const originFieldsData = {
      ...this.state.userEditingData,
    }

    this.setState(
      {
        isEditing: false,
        userEditingData: originFieldsData,
      },
      () => {
        this.clearUserEditingData()
      }
    )
  }

  clearUserEditingData = () => {
    this.setState({
      userEditingData: {
        name: "",
        birth: "",
        identityNumber: "",
        phone: "",
        vaccineType: "",
        dayForVaccination: "",
        remark: "",
      },
    })
  }

  clearKeywordFromSearchBar = () => {
    this.setState({
      keywordFromSearchBar: {
        searchKeyword: "",
        conditionSelect: "",
      },
    })
  }

  filterListBySearch = (keyword, conditionSelect) => {
    if (keyword === "" && conditionSelect === "") {
      alert("請輸入關鍵字")
    } else if (keyword !== "" && conditionSelect === "") {
      alert("請選擇條件")
    } else {
      const filterReservedList =
        this.props.reservedList.filter((item) => {
          return item[conditionSelect].match(keyword)
        })

      this.setState({
        filterReservedList: filterReservedList,
        keywordFromSearchBar: {
          searchKeyword: keyword,
          conditionSelect: conditionSelect,
        },
      })

      if (filterReservedList.length === 0) {
        alert("搜尋結果為 0 個")
      }
    }
  }

  clearFilterReservedList = () => {
    this.setState({
      filterReservedList: [],
    })
  }

  render() {
    const {
      props: {
        pageData,
        reservedList,
        deleteItem,
        handleEditItemSubmit,
        updateReservedListData,
      },
    } = this

    const {
      state: {
        nowPageId,
        filterReservedList,
        isEditing,
        userEditingData,
      },
    } = this

    return (
      <div className="edit-reservation__wrap padding-b-30">
        <div className="info padding-t-30 padding-b-30 padding-l-20">
          <h1 className="title fz-bold padding-b-20">
            編輯預約名單
          </h1>
        </div>

        <TableList
          deleteItem={deleteItem}
          onEditBtnClick={this.onEditBtnClick}
          reservedList={
            filterReservedList.length
              ? filterReservedList
              : reservedList
          }
          searchBarComponent={
            <SearchBar
              filterListBySearch={this.filterListBySearch}
              clearKeywordFromSearchBar={
                this.clearKeywordFromSearchBar
              }
              clearFilterReservedList={
                this.clearFilterReservedList
              }
            />
          }
        />
        <div
          className={`modal edit-modal margin-0-auto padding-10 border-radius-50 ${
            isEditing ? "display-block" : "display-none"
          }`}
        >
          <VaccineReservationForm
            nowPageId={nowPageId}
            pageData={pageData}
            title="編輯預約資訊表"
            className="form margin-0-auto"
            handleEditItemSubmit={handleEditItemSubmit}
            changeIsEditingStateToFalse={
              this.changeIsEditingStateToFalse
            }
            onCancelEditBtnClick={
              this.onCancelEditBtnClick
            }
            userEditingData={userEditingData}
            clearUserEditingData={
              this.clearUserEditingData
            }
            updateReservedListData={
              updateReservedListData
            }
          />
        </div>
      </div>
    )
  }
}

export default EditReservation
