import React, { Component } from "react"
import "./ReservationForm.scss"

class ReservationForm extends Component {
  render() {
    return (
      <div className="reservation-form__wrap">
        <h1 className="title fz-30 fz-bold info padding-t-30  padding-l-20">
          疫苗預約單
        </h1>
        <form
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
                className="input-style"
                autoFocus
                required
              />
            </div>
            <div className="gender-content">
              <input
                type="radio"
                name="gender"
                value="female"
                required
              />
              女
              <input
                type="radio"
                name="gender"
                value="male"
                required
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
                className="input-style"
                pattern="[A-Z]{1}[0-9]{9}"
                title="開頭為大寫英文與 9 位數字"
                required
              />
            </div>
            <div className="birthday-content">
              <label htmlFor="birthday">生日</label>
              <input
                type="text"
                id="birthday"
                className="input-style"
                pattern="[0-9]{7}"
                title="生日格式為7位數字"
                placeholder="範例: 0800101"
                required
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
                className="input-style"
                required
              />
            </div>
            <div className="booking-date-content">
              <label htmlFor="booking-date">
                預約接種日期
              </label>
              <input
                type="date"
                id="booking-date"
                className="input-style"
                required
              />
            </div>
            <div className="booking-time-content">
              <label htmlFor="booking-time">
                預約接種時間
              </label>
              <input
                type="time"
                id="booking-time"
                className="input-style"
                required
              />
            </div>

            <div className="phone-content">
              <label htmlFor="phone">手機號碼</label>
              <input
                type="text"
                id="phone"
                className="input-style"
                pattern="\d{10}"
                title="手機號為10位數字"
                required
              />
            </div>
            <div className="vaccine-content">
              <label htmlFor="vaccine">
                選擇疫苗種類
              </label>
              <select
                type="text"
                id="vaccine"
                className="input-style"
                required
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
                className="input-style"
                required
              />
              <p className="fz-16 padding-l-60 ">
                *有藥物過敏或特殊病史請填寫備註
              </p>
            </div>
          </div>
          <div className="padding-t-30 padding-r-30 d-flex justify-content-end">
            <input
              id="btn-submit"
              className="btn-submit fz-26 input-submit-style btn-color-pink-white"
              type="submit"
              value="提 交"
            />
          </div>
        </form>
        <button></button>
      </div>
    )
  }
}

export default ReservationForm
