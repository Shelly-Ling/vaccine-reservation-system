import React, { Component } from "react"
import "./VaccineReservationForm.scss"

//========================================
//表單驗證所需變數
//========================================
// const nameInput = document.getElementById("name")
// const invalidityNameTextNote = document.querySelector(
//   ".name-content p"
// )

class ReservationForm extends Component {
  static defaultProps = {
    title: "",
    userEditingData: {},
    updateReservedListData: () => {},
    editItem: () => {},
  }
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      birth: "",
      identityNumber: "",
      phone: "",
      address: "",
      dayForVaccination: "",
      timeForVaccination: "",
      vaccineType: "",
      remark: "",
      gender: "",
      formatCheckAllCorrect: false,
      genderFormatCheckCorrect: false,
    }
  }

  /**
   * @description 預約表單提交，更新 localStorage 的 reservedList
   * @param {submit} event
   */
  onSubmitBtnClick = (event) => {
    if (this.state.formatCheckAllCorrect === false) {
      event.preventDefault()

      // this.nameFormatCheck(event)
      // this.phoneFormatCheck(event)
      // this.birthFormatCheck(event)
      // this.addressFormatCheck(event)
      // this.identityNumberFormatCheck(event)
      // this.genderFormatCheck(event)
      // this.dayForVaccinationFormatCheck(event)
      // this.timeForVaccinationFormatCheck(event)

      //驗證所有欄位
      const allInputField =
        document.querySelectorAll(".required")

      for (let item of allInputField) {
        if (item.classList.contains("invalidity")) {
          console.log(
            `item ${item.id} 錯誤 ${item.classList}`
          )

          return
        }
      }

      this.setState({
        formatCheckAllCorrect: true,
      })
    }

    if (this.state.genderFormatCheckCorrect === false) {
      //驗證 gender 欄位
      const genderInputField = document.querySelector(
        ".gender-content"
      )
      if (
        genderInputField.classList.contains("invalidity")
      ) {
        console.log(
          `gender-content 錯誤 ${genderInputField.classList}`
        )
      } else {
        this.setState({
          genderFormatCheckCorrect: true,
        })
      }
    }

    if (
      this.state.formatCheckAllCorrect === true &&
      this.state.genderFormatCheckCorrect === true
    ) {
      //資料提交
      event.preventDefault()

      const data = {
        name: this.state.name,
        birth: this.state.birth,
        identityNumber: this.state.identityNumber,
        phone: this.state.phone,
        address: this.state.address,
        dayForVaccination: this.state.dayForVaccination,
        timeForVaccination: this.state.timeForVaccination,
        vaccineType: this.state.vaccineType,
        remark: this.state.remark,
        gender: this.state.gender,
      }

      let reservedList =
        JSON.parse(
          localStorage.getItem("reservedList")
        ) || []

      console.log("reservedList", reservedList)

      reservedList.unshift(data)

      localStorage.setItem(
        "reservedList",
        JSON.stringify(reservedList)
      )

      console.log("資料提交儲存完成")
      this.props.updateReservedListData()
      console.log("完成資料獲取更新")
    }
  }

  /**
   * @description 表單輸入資料時同步更新 state
   * @param {string} event
   */
  handleInputChange = (event) => {
    const { target } = event
    const name = target.name

    const value =
      target.type === "checkbox"
        ? target.checked
        : target.value

    this.setState(
      {
        [name]: value,
      },
      () => {
        // this.nameFormatCheck(event)
        // this.phoneFormatCheck(event)
        // this.birthFormatCheck(event)
        // this.addressFormatCheck(event)
        // this.identityNumberFormatCheck(event)
        // this.genderFormatCheck(event)
        // this.dayForVaccinationFormatCheck(event)
        // this.timeForVaccinationFormatCheck(event)
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
    console.log(
      "this.state.name.length",
      this.state.name.length
    )
    //若姓名欄位為空，加上報錯 class，反之移除報錯 class
    this.state.name.length === 0
      ? this.addInvalidityClass(
          "name",
          "*姓名欄位不可為空"
        )
      : this.removeInvalidityClass(
          "name",
          "*姓名欄位不可為空"
        )
  }

  /**
   *@description 檢查手機號碼欄位 id: phone
   * @param {string} event
   */
  phoneFormatCheck = (event) => {
    if (this.state.phone.length > 10) {
      this.addInvalidityClass(
        "phone",
        "*手機號碼為10位數字，您輸入超出10位數"
      )
    } else if (this.state.phone.length < 10) {
      this.addInvalidityClass(
        "phone",
        "*手機號碼為10位數字，您輸入低於10位數"
      )
    } else if (this.state.phone.length === 10) {
      //number 正則說明: 數字
      const number = `^[0-9]*$`
      const phoneNumber = this.state.phone

      phoneNumber.match(number) !== null
        ? this.removeInvalidityClass("phone")
        : this.addInvalidityClass(
            "phone",
            "*手機號碼須為數字"
          )
    } else if (this.state.phone.length === 0) {
      //若手機號欄位為空
      this.addInvalidityClass(
        "phone",
        "*手機號碼欄位不可為空"
      )
    }
  }

  birthFormatCheck(event) {
    const birthData = this.state.birth

    if (birthData.length === 7) {
      this.removeInvalidityClass("birth")

      //this.state.birth 生日資料切下來的 年/月/日 字串
      const birthYear = Number(birthData.slice(0, 3))
      const birthMonth = Number(birthData.slice(3, 5))
      const birthDay = Number(birthData.slice(5, 7))

      //number 正則說明: 數字
      const number = `^[0-9]*$`
      const birthString = birthData.toString()

      birthString.match(number) !== null
        ? this.removeInvalidityClass("birth")
        : this.addInvalidityClass(
            "birth",
            "*生日欄位須為數字"
          )

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
    } else if (birthData.length < 7) {
      this.addInvalidityClass(
        "birth",
        "*生日為7位數字，目前過少"
      )
    } else if (birthData.length >= 8) {
      this.addInvalidityClass("birth", "*生日為7位數字")
    } else if (birthData.length === 0) {
      //若生日號欄位為空
      this.addInvalidityClass(
        "birth",
        "*生日欄位不可為空"
      )
    }
  }

  identityNumberFormatCheck(event) {
    const idNumber = this.state.identityNumber.length

    if (idNumber === 0) {
      //若手機號欄位為空
      this.addInvalidityClass(
        "identityNumber",
        "*身分證號欄位不可為空"
      )
    } else if (idNumber >= 11) {
      this.addInvalidityClass(
        "identityNumber",
        "*身分證號超過10位數，請確認"
      )
    } else if (idNumber === 10) {
      // 身分證號核對
      const upperCaseLetters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYX"

      const idData = this.state.identityNumber
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
          identityNumber: newId,
        })
      }

      //number 正則說明: 數字
      const number = `^[0-9]*$`
      idNumbers.match(number) !== null
        ? this.removeInvalidityClass("identityNumber")
        : this.addInvalidityClass(
            "identityNumber",
            "*身份證後 9 碼須為數字"
          )
    } else if (this.state.identityNumber.length < 10) {
      this.addInvalidityClass(
        "identityNumber",
        "*身分證號欄位為英文開頭加數字共10位數"
      )
    }
  }

  /**
   *@description 檢查地址欄位 id: address
   * @param {string} event
   */
  addressFormatCheck = (event) => {
    this.state.address.length === 0
      ? this.addInvalidityClass(
          "address",
          "*地址欄位不可為空"
        )
      : this.removeInvalidityClass("address")
  }

  /**
   *@description 檢查性別欄位 id: gender
   * @param {string} event
   */
  genderFormatCheck = (event) => {
    //若性別欄未選取
    if (this.state.gender.length === 0) {
      const inputField = document.querySelector(
        ".gender-content"
      )
      const invalidityTextNote = document.querySelector(
        ".gender-content p"
      )

      inputField.classList.add("invalidity")
      invalidityTextNote.innerText = "*請選擇性別"
      invalidityTextNote.classList.add("invalidity-text")
    } else if (this.state.gender.length !== 0) {
      const inputField = document.querySelector(
        ".gender-content"
      )
      const invalidityTextNote = document.querySelector(
        ".gender-content p"
      )
      inputField.classList.remove("invalidity")
      invalidityTextNote.classList.remove(
        "invalidity-text"
      )
    }
  }

  /**
   *@description 檢查施打日期欄位 id: booking-date
   * @param {string} event
   */
  dayForVaccinationFormatCheck = (event) => {
    this.state.dayForVaccination.length === 0
      ? this.addInvalidityClass(
          "booking-date",
          "*日期欄位不可為空"
        )
      : this.removeInvalidityClass("booking-date")
  }

  /**
   *@description 檢查地址欄位 id: booking-time
   * @param {string} event
   */
  timeForVaccinationFormatCheck = (event) => {
    this.state.timeForVaccination.length === 0
      ? this.addInvalidityClass(
          "booking-time",
          "*時間欄位不可為空"
        )
      : this.removeInvalidityClass("booking-time")
  }

  render() {
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
            <div className="gender-content ">
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
              <p className="padding-t-10 padding-l-50 display-none">
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
                name="timeForVaccination"
                className="input-style required"
                value={this.state.timeForVaccination}
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
            />
          </div>
        </form>
      </div>
    )
  }
}

export default ReservationForm
