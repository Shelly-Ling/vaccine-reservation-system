import React, { Component } from "react"
import "./VaccineReservationForm.scss"
class VaccineReservationForm extends Component {
  static defaultProps = {
    nowPageId: -1,
    pageData: {},
    title: "",
    userEditingData: {},
    clearUserEditingData: () => {},
    updateReservedListData: () => {},
    handleEditItemSubmit: () => {},
    changeIsEditingState: () => {},
    editItem: () => {},
    changePage: () => {},
  }
  constructor(props) {
    super(props)

    this.state = {
      fields: {
        name: "",
        birth: "",
        identityNumber: "",
        phone: "",
        vaccineType: "",
        dayForVaccination: "",
        remark: "",
      },
      formatCheckAllCorrect: false,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.userEditingData.name !==
      this.props.userEditingData.name
    ) {
      this.setState(
        {
          fields: { ...this.props.userEditingData },
        },
        () => {
          this.AllFormatCheck()
        }
      )
    }
  }

  /**
   * @description 預約表單提交，更新 localStorage 的 reservedList
   * @param {submit} event
   */
  onReserveSubmitBtnClick = (event) => {
    event.preventDefault()
    this.AllFormatCheck(event)

    if (this.state.formatCheckAllCorrect) {
      //資料提交
      const data = { ...this.state.fields }

      let reservedList =
        JSON.parse(
          localStorage.getItem("reservedList")
        ) || []

      reservedList.unshift(data)

      localStorage.setItem(
        "reservedList",
        JSON.stringify(reservedList)
      )

      this.props.updateReservedListData()

      const nextPageId =
        this.props.pageData.reservedList.id

      this.setState(
        {
          fields: {
            name: "",
            birth: "",
            identityNumber: "",
            phone: "",
            vaccineType: "",
            dayForVaccination: "",
            remark: "",
          },
          formatCheckAllCorrect: false,
        },
        () => {
          this.props.changePage(nextPageId)
        }
      )
    }
  }

  onEditSubmitBtnClick = (event) => {
    event.preventDefault()
    this.AllFormatCheck(event)

    if (this.state.formatCheckAllCorrect) {
      //資料提交
      const data = { ...this.state.fields }

      this.props.changeIsEditingState()
      this.props.handleEditItemSubmit(data)

      this.setState(
        {
          fields: {
            name: "",
            birth: "",
            identityNumber: "",
            phone: "",
            vaccineType: "",
            dayForVaccination: "",
            remark: "",
          },
          formatCheckAllCorrect: false,
        },
        () => {
          this.props.clearUserEditingData()
        }
      )
    }
  }

  AllFormatCheck = (event) => {
    if (this.state.formatCheckAllCorrect === false) {
      this.nameFormatCheck(event)
      this.phoneFormatCheck(event)
      this.birthFormatCheck(event)
      this.identityNumberFormatCheck(event)
      this.vaccineTypeFormatCheck(event)
      this.dayForVaccinationFormatCheck(event)

      const formatCheckIsDone =
        this.nameFormatCheck(event) &&
        this.phoneFormatCheck(event) &&
        this.birthFormatCheck(event) &&
        this.identityNumberFormatCheck(event) &&
        this.vaccineTypeFormatCheck(event) &&
        this.dayForVaccinationFormatCheck(event)

      if (formatCheckIsDone) {
        this.setState({
          formatCheckAllCorrect: true,
        })
      } else {
        this.setState({
          formatCheckAllCorrect: false,
        })
      }
    } else {
      this.setState({
        formatCheckAllCorrect: false,
      })
    }
  }

  /**
   * @description 表單輸入資料時同步更新 state
   * @param {string} event
   */
  handleInputChange = (event) => {
    this.AllFormatCheck(event)

    const { target } = event
    const name = target.name

    const value =
      target.type === "checkbox"
        ? target.checked
        : target.value

    this.setState(
      {
        fields: { ...this.state.fields, [name]: value },
      },
      () => {
        this.AllFormatCheck(event)
      }
    )
  }

  /**
   * @description input 欄掛上提示 class 樣式 與欄位提示字串
   * @param {string} elementId
   * @param {string} alertString
   */
  addInvalidityClass(elementId, alertString) {
    const idString = `#${elementId}`
    const pTagString = `#${elementId} ~ p`

    const inputField = document.querySelector(idString)

    const invalidityTextNote =
      document.querySelector(pTagString)

    inputField.classList.add("invalidity")
    invalidityTextNote.innerText = alertString
    invalidityTextNote.classList.add("invalidity-text")
  }

  /**
   * @description input 欄移除提示 class 樣式 與欄位提示字串
   * @param {string} elementId
   */
  removeInvalidityClass(elementId) {
    const idString = `#${elementId}`
    const pTagString = `#${elementId} ~ p`

    const inputField = document.querySelector(idString)

    const invalidityTextNote =
      document.querySelector(pTagString)

    inputField.classList.remove("invalidity")
    invalidityTextNote.classList.remove("invalidity-text")
  }

  /**
   *@description 檢查姓名欄位 id: name
   * @param {string} event
   */
  nameFormatCheck = (event) => {
    //若姓名欄位為空，加上報錯 class，反之移除報錯 class

    if (this.state.fields.name !== "") {
      this.removeInvalidityClass(
        "name",
        "*姓名欄位不可為空"
      )
      return true
    } else {
      this.addInvalidityClass("name", "*姓名欄位不可為空")
      return false
    }
  }

  /**
   *@description 檢查手機號碼欄位 id: phone
   * @param {string} event
   */
  phoneFormatCheck = (event) => {
    const phoneLength = this.state.fields.phone.length

    if (phoneLength > 10) {
      this.addInvalidityClass(
        "phone",
        "*手機號碼為10位數字，您輸入超出10位數"
      )
      return false
    } else if (phoneLength < 10) {
      this.addInvalidityClass(
        "phone",
        "*手機號碼為10位數字，您輸入低於10位數"
      )
      return false
    } else if (phoneLength === 10) {
      //number 正則說明: 數字
      const number = `^[0-9]*$`
      const phoneNumber = this.state.fields.phone

      if (phoneNumber.match(number) !== null) {
        this.removeInvalidityClass("phone")
        return true
      } else {
        this.addInvalidityClass(
          "phone",
          "*手機號碼須為數字"
        )
        return false
      }
    } else if (phoneLength === 0) {
      //若手機號欄位為空
      this.addInvalidityClass(
        "phone",
        "*手機號碼欄位不可為空"
      )
      return false
    } else {
      return true
    }
  }

  birthFormatCheck(event) {
    const birthData = this.state.fields.birth
    const birthDataLength = this.state.fields.birth.length
    if (birthDataLength < 7) {
      this.addInvalidityClass(
        "birth",
        "*生日為7位數字，目前過少"
      )
      return false
    } else if (birthDataLength === 7) {
      this.removeInvalidityClass("birth")

      //birthData 生日資料切下來的 年/月/日 字串
      const birthYear = Number(birthData.slice(0, 3))
      const birthMonth = Number(birthData.slice(3, 5))
      const birthDay = Number(birthData.slice(5, 7))

      //驗證生日字串
      if (birthYear <= 5 || birthYear <= 0) {
        //假設用戶 105 歲以下
        this.addInvalidityClass(
          "birth",
          "*年份可能輸錯請確認"
        )
        return false
      } else if (birthMonth > 12 || birthMonth <= 0) {
        this.addInvalidityClass(
          "birth",
          "*月份可能輸錯請確認"
        )
        return false
      } else if (birthDay >= 32 || birthDay <= 0) {
        this.addInvalidityClass(
          "birth",
          "*出生日可能輸錯請確認"
        )
        return false
      }

      //number 正則說明: 數字
      const number = `^[0-9]*$`
      const birthString = birthData.toString()

      if (birthString.match(number) !== null) {
        this.removeInvalidityClass("birth")
        return true
      } else {
        this.addInvalidityClass(
          "birth",
          "*生日欄位須為數字"
        )
        return false
      }
    } else if (birthDataLength >= 8) {
      this.addInvalidityClass("birth", "*生日為7位數字")
      return false
    } else if (birthDataLength === 0) {
      //若生日號欄位為空
      this.addInvalidityClass(
        "birth",
        "*生日欄位不可為空"
      )
      return false
    }
  }

  identityNumberFormatCheck(event) {
    const idNumberLength =
      this.state.fields.identityNumber.length

    if (idNumberLength === 0) {
      //若手機號欄位為空
      this.addInvalidityClass(
        "identityNumber",
        "*身分證號欄位不可為空"
      )
      return false
    } else if (idNumberLength >= 11) {
      this.addInvalidityClass(
        "identityNumber",
        "*身分證號超過10位數，請確認"
      )
      return false
    } else if (idNumberLength === 10) {
      // 身分證號核對
      const upperCaseLetters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYX"

      const idData = this.state.fields.identityNumber
      const idDataFirstLetter = idData.slice(0, 1)
      const idNumbers = idData.slice(1)

      const idFirstLetterIndex = upperCaseLetters.indexOf(
        idDataFirstLetter
      )

      //身分證號字母轉大寫
      if (idFirstLetterIndex === -1) {
        const firstToUpperCase =
          idDataFirstLetter.toUpperCase()
        const newId = firstToUpperCase + idNumbers

        this.setState({
          fields: {
            ...this.state.fields,
            identityNumber: newId,
          },
        })
      }

      //number 正則說明: 數字
      const number = `^[0-9]*$`

      if (idNumbers.match(number) !== null) {
        this.removeInvalidityClass("identityNumber")

        return true
      } else {
        this.addInvalidityClass(
          "identityNumber",
          "*身份證後 9 碼須為數字"
        )
        return false
      }
    } else if (idNumberLength < 10) {
      this.addInvalidityClass(
        "identityNumber",
        "*身分證號欄位為英文開頭加數字共10位數"
      )
      return false
    }
  }

  /**
   *@description 檢查疫苗種類欄位 id: vaccine-type
   * @param {string} event
   */
  vaccineTypeFormatCheck = (event) => {
    if (this.state.fields.vaccineType) {
      this.removeInvalidityClass("vaccine-type")
      return true
    } else {
      this.addInvalidityClass(
        "vaccine-type",
        "*請選擇疫苗種類"
      )
      return false
    }
  }

  /**
   *@description 檢查施打日期欄位 id: booking-date
   * @param {string} event
   */
  dayForVaccinationFormatCheck = (event) => {
    if (this.state.fields.dayForVaccination.length) {
      this.removeInvalidityClass("booking-date")

      return true
    } else {
      this.addInvalidityClass(
        "booking-date",
        "*日期欄位不可為空"
      )
      return false
    }
  }

  determineSubmitFunction = (event) => {
    const reservationFormPageId =
      this.props.pageData.reservationForm.id

    const editReservationPageId =
      this.props.pageData.editReservation.id

    if (this.props.nowPageId === reservationFormPageId) {
      return this.onReserveSubmitBtnClick(event)
    } else if (
      this.props.nowPageId === editReservationPageId
    ) {
      return this.onEditSubmitBtnClick(event)
    }
  }

  render() {
    const editReservationPageId =
      this.props.pageData.editReservation.id

    return (
      <div className="reservation-form__wrap">
        <h1 className="title fz-30 fz-bold padding-t-30 display-inline-block padding-l-20">
          {this.props.title}
        </h1>
        <span className="required-mark_content fz-24 padding-l-40">
          <span className="required-icon">*</span>
          <span>為必填</span>
        </span>

        <form
          onSubmit={(event) =>
            this.determineSubmitFunction(event)
          }
          className="form"
          id="form"
          action=""
          method="get"
        >
          <div className="input-list">
            <div className="name-content">
              <label
                htmlFor="name"
                className="margin-r-40 margin-l-40"
              >
                <span className="required-icon">*</span>
                姓名
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="name input-style required"
                autoFocus
                value={this.state.fields.name}
                onChange={this.handleInputChange}
              />
              <p className="padding-l-140 display-none">
                *項目不可為空
              </p>
            </div>
            <div className="identityNumber-content">
              <label
                htmlFor="identityNumber"
                className="margin-r-20 margin-l-20"
              >
                <span className="required-icon">*</span>
                身份證號
              </label>
              <input
                type="text"
                id="identityNumber"
                name="identityNumber"
                className="input-style required"
                value={this.state.fields.identityNumber}
                onChange={this.handleInputChange}
                disabled={
                  this.props.nowPageId ===
                  editReservationPageId
                }
              />
              <p className="padding-l-140 display-none">
                *項目不可以為空
              </p>
            </div>
            <div className="birth-content">
              <label
                htmlFor="birth"
                className="margin-r-40 margin-l-40"
              >
                <span className="required-icon">*</span>
                生日
              </label>
              <input
                type="text"
                id="birth"
                name="birth"
                className="input-style required"
                placeholder="範例: 0800101"
                value={this.state.fields.birth}
                onChange={this.handleInputChange}
              />
              <p className="padding-l-140 display-none">
                *項目不可以為空
              </p>
              <p className="fz-16 padding-l-140">
                *若您生日為民國80年1月1日，請輸入0800101
              </p>
            </div>

            <div className="dayForVaccination-content ">
              <label htmlFor="booking-date">
                <span className="required-icon">*</span>
                預約接種日期
              </label>
              <input
                type="date"
                id="booking-date"
                name="dayForVaccination"
                className="input-style required"
                value={
                  this.state.fields.dayForVaccination
                }
                onChange={this.handleInputChange}
              />
              <p className="padding-l-140 display-none">
                *項目不可以為空
              </p>
            </div>

            <div className="phone-content">
              <label
                htmlFor="phone"
                className="margin-r-20 margin-l-20"
              >
                <span className="required-icon">*</span>
                手機號碼
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="input-style required"
                value={this.state.fields.phone}
                onChange={this.handleInputChange}
              />
              <p className="padding-l-140 display-none">
                *項目不可以為空
              </p>
            </div>
            <div className="vaccine-content">
              <label htmlFor="vaccine">
                <span className="required-icon">*</span>
                選擇疫苗種類
              </label>
              <select
                type="text"
                id="vaccine-type"
                name="vaccineType"
                className="input-style required"
                value={this.state.fields.vaccineType}
                onChange={this.handleInputChange}
              >
                <option value="請選擇">--請選擇--</option>
                <option value="BNT">BNT</option>
                <option value="莫德納">莫德納</option>
                <option value="AZ">AZ</option>
                <option value="嬌生">嬌生</option>
                <option value="高端/連雅">
                  高端 / 連雅
                </option>
                <option value="科興">科興</option>
              </select>
              <p className="padding-l-140 display-none">
                *項目不可以為空
              </p>
            </div>
            <div className="remark-content">
              <label
                htmlFor="remark"
                className="margin-r-50 margin-l-50"
              >
                備註
              </label>
              <input
                type="text"
                id="remark"
                name="remark"
                className="input-style"
                value={this.state.fields.remark}
                onChange={this.handleInputChange}
              />
              <p className="fz-16 padding-l-140">
                *有藥物過敏或特殊病史請填寫備註
              </p>
            </div>
          </div>
          <div className="padding-t-30 padding-r-30 d-flex justify-content-end">
            <input
              id="btn-submit"
              name="submit-btn"
              className="btn-submit fz-26 input-submit-style btn-color-pink-white"
              type="submit"
              value="提 交"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default VaccineReservationForm
