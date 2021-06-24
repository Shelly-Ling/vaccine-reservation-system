import React, { Component } from "react"
import "./ReservationForm.scss"

//========================================
//表單驗證所需變數
//========================================
// const nameInput = document.getElementById("name")
// const invalidityNameTextNote = document.querySelector(
//   ".name-content p"
// )

class ReservationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      birth: "",
      identityNumber: "",
      phone: "",
      address: "",
      dayForVaccination: "",
      timeForVaccinationDay: "",
      vaccineType: "",
      remark: "",
      gender: "",
    }
  }

  /**
   * @description 預約表單提交，更新 localStorage 的 reservedList
   * @param {submit} event
   */
  onSubmitBtnClick = (event) => {
    //檢查欄位是否為空
    this.inputEmptyCheck(event)

    //資料提交
    const data = {
      ...this.state,
    }

    let reservedList =
      JSON.parse(localStorage.getItem("reservedList")) ||
      []
    reservedList.unshift(data)

    localStorage.setItem(
      "reservedList",
      JSON.stringify(reservedList)
    )
  }

  inputEmptyCheck(event) {
    const allInputLength =
      this.state.name.length &&
      this.state.birth.length &&
      this.state.phone.length &&
      this.state.address.length &&
      this.state.dayForVaccination.length &&
      this.state.timeForVaccinationDay.length &&
      this.state.vaccineType.length

    if (allInputLength === 0) {
      event.preventDefault()
      const allRequiredInput =
        document.querySelectorAll(".required")

      for (let i = 0; i < allRequiredInput.length; i++) {
        allRequiredInput[i].classList.add("invalidity")

        const invalidityTextNote =
          allRequiredInput[i].parentElement.lastChild

        invalidityTextNote.classList.add(
          "invalidity-text"
        )
        invalidityTextNote.innerText = "*必填欄位不可為空"
      }
    }
  }

  formatCheck() {
    const nameInput = document.getElementById("name")
    const invalidityNameTextNote = document.querySelector(
      ".name-content p"
    )

    const nameInputValue = nameInput.value.trim()

    // if (nameInputValue.length === 0) {
    //   console.log("nameInput 不可為空")
    // } else if (nameInputValue === "123") {
    //   invalidityNameTextNote.innerText = "123"
    // }

    // if (nameInput.validity.badInput) {
    //   console.log("Bad input detected…")
    // } else {
    //   console.log("Content of input ok.")
    // }
  }

  /**
   * @description 表單輸入資料時同步更新 state
   * @param {onChange} event
   */
  handleInputChange = (event) => {
    const allRequiredInput =
      document.querySelectorAll(".required")

    for (let i = 0; i < allRequiredInput.length; i++) {
      allRequiredInput[i].classList.remove("invalidity")

      const invalidityTextNote =
        allRequiredInput[i].parentElement.lastChild

      invalidityTextNote.classList.remove(
        "invalidity-text"
      )
      invalidityTextNote.innerText = "*必填欄位不可為空"
    }

    const target = event.target

    const value =
      target.type === "checkbox"
        ? target.checked
        : target.value

    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    const {
      props: { showElement },
    } = this

    return showElement ? (
      <div className="reservation-form__wrap">
        <h1 className="title fz-30 fz-bold padding-t-30 display-inline-block padding-l-20">
          疫苗預約單
        </h1>
        <span className="required-mark_content fz-24 padding-l-40">
          <span className="required-icon">*</span>
          <span>為必填</span>
        </span>

        <form
          onSubmit={this.onSubmitBtnClick}
          onChange={this.formatCheck}
          className="form"
          id="form"
          action=""
          method="get"
        >
          <div className="input-list">
            <div className="name-content">
              <label htmlFor="name">
                <span className="required-icon">*</span>
                姓名
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-style required"
                autoFocus
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <p className="padding-l-80 display-none">
                *項目不可為空
              </p>
            </div>
            <div className="gender-content">
              <span className="required-icon">*</span>
              <input
                className="gender required"
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleInputChange}
              />
              女
              <input
                type="radio"
                name="gender"
                value="male"
                className="gender required"
                checked={this.state.gender === "male"}
                onChange={this.handleInputChange}
              />
              男
              <p className="padding-l-50 display-none">
                *項目不可以為空
              </p>
            </div>
            <div className="user-id-content">
              <label htmlFor="user-id">
                {" "}
                <span className="required-icon">*</span>
                身份證號
              </label>
              <input
                type="text"
                id="user-id"
                name="identityNumber"
                className="input-style required"
                value={this.state.identityNumber}
                onChange={this.handleInputChange}
              />
              <p className="padding-l-130 display-none">
                *項目不可以為空
              </p>
            </div>
            <div className="birth-content">
              <label htmlFor="birth">
                {" "}
                <span className="required-icon">*</span>
                生日
              </label>
              <input
                type="text"
                id="birth"
                name="birth"
                className="input-style required"
                placeholder="範例: 0800101"
                value={this.state.birth}
                onChange={this.handleInputChange}
              />
              <p className="fz-16 padding-l-80">
                *若您生日為民國80年1月1日，請輸入0800101
              </p>
              <p className="padding-l-80 display-none">
                *項目不可以為空
              </p>
            </div>
            <div className="address-content">
              <label htmlFor="address">
                {" "}
                <span className="required-icon">*</span>
                聯繫地址
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="input-style required"
                value={this.state.address}
                onChange={this.handleInputChange}
              />
              <p className="padding-l-130 display-none">
                *項目不可以為空
              </p>
            </div>
            <div className="booking-date-content ">
              <label htmlFor="booking-date">
                <span className="required-icon">*</span>
                預約接種日期
              </label>
              <input
                type="date"
                id="booking-date"
                name="dayForVaccination"
                className="input-style required"
                value={this.state.dayForVaccination}
                onChange={this.handleInputChange}
              />
              <p className="padding-l-170 display-none">
                *項目不可以為空
              </p>
            </div>
            <div className="booking-time-content">
              <label htmlFor="booking-time">
                <span className="required-icon">*</span>
                預約接種時間
              </label>
              <input
                type="time"
                id="booking-time"
                name="timeForVaccinationDay"
                className="input-style required"
                value={this.state.timeForVaccinationDay}
                onChange={this.handleInputChange}
              />
              <p className="padding-l-170 display-none">
                *項目不可以為空
              </p>
            </div>

            <div className="phone-content">
              <label htmlFor="phone">
                {" "}
                <span className="required-icon">*</span>
                手機號碼
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="input-style required"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
              <p className="padding-l-130 display-none">
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
                id="vaccine"
                name="vaccineType"
                className="input-style required"
                value={this.state.vaccineType}
                onChange={this.handleInputChange}
              >
                <option value="BNT">BNT</option>
                <option value="莫德納">莫德納</option>
                <option value="AZ">AZ</option>
                <option value="嬌生">嬌生</option>
                <option value="高端/連雅">
                  高端 / 連雅
                </option>
                <option value="科興">科興</option>
              </select>
              <p className="padding-l-170 display-none">
                *項目不可以為空
              </p>
            </div>
            <div className="remark-content">
              <label htmlFor="remark">備註</label>
              <input
                type="text"
                id="remark"
                name="remark"
                className="input-style"
                value={this.state.remark}
                onChange={this.handleInputChange}
              />
              <p className="fz-16 padding-l-60 ">
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
              // onClick={this.onSubmitBtnClick}
            />
          </div>
        </form>
        <button></button>
      </div>
    ) : null
  }
}

export default ReservationForm
