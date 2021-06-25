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
    event.preventDefault()
    console.log("onSubmitBtnClick")
    this.nameFormatCheck(event)
    this.phoneFormatCheck(event)
    this.birthFormatCheck(event)
    this.addressFormatCheck(event)
    this.identityNumberFormatCheck(event)

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

  /**
   * @description 表單輸入資料時同步更新 state
   * @param {string} event
   */
  handleInputChange = (event) => {
    const target = event.target

    const value =
      target.type === "checkbox"
        ? target.checked
        : target.value

    const name = target.name

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.nameFormatCheck(event)
        this.phoneFormatCheck(event)
        this.birthFormatCheck(event)
        this.addressFormatCheck(event)
        this.identityNumberFormatCheck(event)
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
    //若姓名欄為空
    if (this.state.name.length === 0) {
      this.addInvalidityClass("name", "*姓名欄位不可為空")
    } else if (this.state.name.length !== 0) {
      this.removeInvalidityClass(
        "name",
        "*姓名欄位不可為空"
      )
    }
  }

  /**
   *@description 檢查手機號碼欄位 id: phone
   * @param {string} event
   */
  phoneFormatCheck = (event) => {
    if (this.state.phone.length >= 11) {
      this.addInvalidityClass(
        "phone",
        "*手機號碼為10位數字"
      )
    } else if (this.state.phone.length !== 0) {
      //若手機號欄位有內容即刻驗證

      this.removeInvalidityClass("phone")

      //電話字串核對
      const number = "1234567890"
      const phone = this.state.phone
      const phoneNumberString = phone.split("")

      for (let item of phoneNumberString) {
        let numberIndex = number.indexOf(item)

        if (numberIndex === -1) {
          this.addInvalidityClass(
            "phone",
            "*手機號碼須為數字"
          )
        }
      }
    } else if (this.state.phone.length === 0) {
      //若手機號欄位為空
      this.addInvalidityClass(
        "phone",
        "*手機號碼欄位不可為空"
      )
    }
  }

  birthFormatCheck(event) {
    const number = "1234567890"
    const birthData = this.state.birth

    if (birthData.length === 7) {
      //this.state.birth 生日資料切下來的 年/月/日 字串

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
      } else if (birthMonth > 12 || birthMonth <= 0) {
        this.addInvalidityClass(
          "birth",
          "*月份可能輸錯請確認"
        )
      } else if (birthDay >= 32 || birthDay <= 0) {
        this.addInvalidityClass(
          "birth",
          "*出生日可能輸錯請確認"
        )
      }
    } else if (birthData.length >= 8) {
      this.addInvalidityClass("birth", "*生日為7位數字")
    } else if (birthData.length !== 0) {
      this.removeInvalidityClass("birth")

      //生日字串核對

      const phoneNumberString = birthData.split("")

      for (let item of phoneNumberString) {
        let numberIndex = number.indexOf(item)

        if (numberIndex === -1) {
          this.addInvalidityClass(
            "birth",
            "*生日欄位須為數字"
          )
        }
      }
    } else if (birthData.length === 0) {
      //若生日號欄位為空
      this.addInvalidityClass(
        "birth",
        "*生日欄位不可為空"
      )
    }
  }

  identityNumberFormatCheck(event) {
    if (this.state.identityNumber.length === 0) {
      //若手機號欄位為空
      this.addInvalidityClass(
        "identityNumber",
        "*身分證號欄位不可為空"
      )
    } else if (this.state.identityNumber.length >= 11) {
      this.addInvalidityClass(
        "identityNumber",
        "*身分證號超過10位數，請確認"
      )
    } else if (this.state.identityNumber.length !== 0) {
      this.removeInvalidityClass("identityNumber")

      //身分證號核對
      const upperCaseLetters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYX"
      const number = "1234567890"

      const idData = this.state.identityNumber
      const idDataFirstLetter = idData.slice(0, 1)
      const idNumbers = idData.slice(1)
      const idNumbersArray = idData.slice(1).split("")

      const idFirstLetterIndex = upperCaseLetters.indexOf(
        idDataFirstLetter
      )

      //身分證號字母轉大寫
      if (idFirstLetterIndex === -1) {
        const firstToUpperCase =
          idDataFirstLetter.toUpperCase()
        const newId = firstToUpperCase + idNumbers

        this.setState({
          identityNumber: newId,
        })
      }

      for (let item of idNumbersArray) {
        let numberIndex = number.indexOf(item)

        if (numberIndex === -1) {
          this.addInvalidityClass(
            "identityNumber",
            "*身分證後9碼須為數字"
          )
        }
      }
    }
  }

  /**
   *@description 檢查地址欄位 id: address
   * @param {string} event
   */
  addressFormatCheck = (event) => {
    //若地址欄為空
    if (this.state.address.length === 0) {
      this.addInvalidityClass(
        "address",
        "*地址欄位不可為空"
      )
    } else if (this.state.address.length !== 0) {
      this.removeInvalidityClass("address")
    }
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
            <div className="identityNumber-content">
              <label htmlFor="identityNumber">
                <span className="required-icon">*</span>
                身份證號
              </label>
              <input
                type="text"
                id="identityNumber"
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
              <p className="padding-t-20 padding-l-80 display-none">
                *項目不可以為空
              </p>
              <p className="fz-16 padding-l-80">
                *若您生日為民國80年1月1日，請輸入0800101
              </p>
            </div>
            <div className="address-content">
              <label htmlFor="address">
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
