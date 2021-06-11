import React, { Component } from "react"
import "./ReservationForm.scss"

class ReservationForm extends Component {
  render() {
    return (
      <div className="reservation-form__wrap">
        <h1>疫苗預約單</h1>
        <form
          className="form clearfix"
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
                placeholder="請輸入姓名"
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
                placeholder="請輸入身份證號"
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
                placeholder="請輸入生日"
                pattern="[0-9]{7}"
                title="生日格式為7位數字"
                required
              />
              <p className="fz-16 padding-l-60">
                *若您生日為民國80年1月1日，請輸入0800101
              </p>
            </div>
            <div className="address-content">
              <label htmlFor="address">地址</label>

              <input
                type="text"
                id="address"
                className="input-style"
                placeholder="請輸入地址"
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
                placeholder="請輸入手機號碼"
                required
              />
            </div>
            <div className="remark-content">
              <label htmlFor="remark">備註</label>
              <input
                type="text"
                id="remark"
                className="input-style"
                placeholder="請輸入備註"
                required
              />
              <p className="fz-16 padding-l-60 ">
                *有藥物過敏請備註
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
