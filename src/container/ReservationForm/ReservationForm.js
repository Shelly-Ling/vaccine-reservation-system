import React, { Component } from "react"
import uuid from "react-uuid"
import "./ReservationForm.scss"

class ReservationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: -1,
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

  onSubmitBtnClick = (event) => {
    const data = {
      ...this.state,
      id: uuid(),
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

  handleInputChange = (event) => {
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
        <h1 className="title fz-30 fz-bold info padding-t-30  padding-l-20">
          疫苗預約單
        </h1>
        <form
          onSubmit={this.onSubmitBtnClick}
          className="form"
          id="form"
          action=""
          method="get"
        >
          <div className="input-list">
            <div className="name-content">
              <label htmlFor="name">姓名</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-style"
                autoFocus
                required
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="gender-content">
              <input
                type="radio"
                name="gender"
                value="female"
                required
                checked={this.state.gender === "female"}
                onChange={this.handleInputChange}
              />
              女
              <input
                type="radio"
                name="gender"
                value="male"
                required
                checked={this.state.gender === "male"}
                onChange={this.handleInputChange}
              />
              男
            </div>
            <div className="user-id-content">
              <label
                htmlFor="user-id"
                pattern="[a-zA-Z0-9]"
              >
                身份證號
              </label>
              <input
                type="text"
                id="user-id"
                name="identityNumber"
                className="input-style"
                pattern="[A-Z]{1}[0-9]{9}"
                title="開頭為大寫英文與 9 位數字"
                required
                value={this.state.identityNumber}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="birth-content">
              <label htmlFor="birth">生日</label>
              <input
                type="text"
                id="birth"
                name="birth"
                className="input-style"
                pattern="[0-9]{7}"
                title="生日格式為7位數字"
                placeholder="範例: 0800101"
                required
                value={this.state.birth}
                onChange={this.handleInputChange}
              />
              <p className="fz-16 padding-l-60">
                *若您生日為民國80年1月1日，請輸入0800101
              </p>
            </div>
            <div className="address-content">
              <label htmlFor="address">聯繫地址</label>

              <input
                type="text"
                id="address"
                name="address"
                className="input-style"
                required
                value={this.state.address}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="booking-date-content">
              <label htmlFor="booking-date">
                預約接種日期
              </label>
              <input
                type="date"
                id="booking-date"
                name="dayForVaccination"
                className="input-style"
                required
                value={this.state.dayForVaccination}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="booking-time-content">
              <label htmlFor="booking-time">
                預約接種時間
              </label>
              <input
                type="time"
                id="booking-time"
                name="timeForVaccinationDay"
                className="input-style"
                required
                value={this.state.timeForVaccinationDay}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="phone-content">
              <label htmlFor="phone">手機號碼</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="input-style"
                pattern="[0-9]{10}"
                title="手機號為10位數字"
                required
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="vaccine-content">
              <label htmlFor="vaccine">
                選擇疫苗種類
              </label>
              <select
                type="text"
                id="vaccine"
                name="vaccineType"
                className="input-style"
                required
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
