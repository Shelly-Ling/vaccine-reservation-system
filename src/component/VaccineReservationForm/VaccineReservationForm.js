import React, { useState } from "react"
import "./VaccineReservationForm.scss"
import DeleteIcon from "../Icons/DeleteIcon/DeleteIcon"

const pageData = {
  reservationForm: {
    id: 1,
    pageName: "reservation-form",
    title: "預約申請",
  },
  reservedList: {
    id: 2,
    pageName: "reserved-list",
    title: "已預約名單",
  },
  editReservation: {
    id: 3,
    pageName: "edit-reservation",
    title: "編輯預約名單",
  },
}

function VaccineReservationForm() {
  return (
    <div className="reservation-form__wrap contain-width ">
      <div className="form__header padding-t-30">
        <h1 className="title fz-35 fz-bold display-inline-block">
          表單標題
        </h1>
        <span className="required-icon padding-l-20">
          *
        </span>
        <span className="required-icon">為必填</span>
        {/* <DeleteIcon /> */}
      </div>
      <form
        // onSubmit={(event) =>
        //   nowPageId === pageData.reservationForm.id
        //     ? this.onReserveSubmitBtnClick(event)
        //     : nowPageId === pageData.editReservation.id
        //     ? this.onEditSubmitBtnClick(event)
        //     : this.onReserveSubmitBtnClick(event)
        // }
        className="form"
        method="POST"
      >
        <div className="input-list">
          <div className="name-content padding-r-10">
            <label
              htmlFor="name"
              className="display-block"
            >
              <span className="required-icon">*</span>
              姓名
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="input-name input-style"
              autoFocus
              // value={fields.name}
              // onChange={this.handleInputChange}
            />
            <p className="fz-16 display-none">
              *項目不可為空
            </p>
          </div>
          <div className="identityNumber-content padding-l-10">
            <label htmlFor="identity-number">
              <span className="required-icon">*</span>
              身份證號
            </label>
            <input
              id="identity-number"
              type="text"
              name="identityNumber"
              className="identityNumber input-style"
              // value={fields.identityNumber}
              // onChange={this.handleInputChange}
              // disabled={
              //   nowPageId === pageData.editReservation.id
              // }
            />
            <p className="fz-16 display-none">
              *項目不可為空
            </p>
          </div>
          <div className="birth-content padding-r-10">
            <label htmlFor="birth">
              <span className="required-icon">*</span>
              生日
            </label>
            <input
              id="birth"
              type="text"
              name="birth"
              className="birth input-style"
              placeholder="範例: 0800101"
              // value={fields.birth}
              // onChange={this.handleInputChange}
            />
            <p className="fz-16 display-none">
              *項目不可為空
            </p>
            <p className="fz-16">
              *若您生日為民國80年1月1日，請輸入0800101
            </p>
          </div>

          <div className="dayForVaccination-content padding-l-10">
            <label htmlFor="booking-date">
              <span className="required-icon">*</span>
              預約接種日期
            </label>
            <input
              id="booking-date"
              type="date"
              name="dayForVaccination"
              className="booking-date input-style"
              // value={fields.dayForVaccination}
              // onChange={this.handleInputChange}
            />
            <p className="fz-16 display-none">
              *項目不可為空
            </p>
          </div>

          <div className="phone-content padding-l-10">
            <label htmlFor="phone">
              <span className="required-icon">*</span>
              手機號碼
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              className="phone input-style"
              // value={fields.phone}
              // onChange={this.handleInputChange}
            />
            <p className="fz-16 display-none">
              *項目不可為空
            </p>
          </div>
          <div className="vaccine-content padding-r-10">
            <label htmlFor="vaccine">
              <span className="required-icon">*</span>
              選擇疫苗種類
            </label>
            <select
              id="vaccine"
              type="text"
              name="vaccineType"
              className="vaccine-type input-style"
              // value={fields.vaccineType}
              // onChange={this.handleInputChange}
            >
              <option value="" disabled>
                --請選擇--
              </option>
              <option value="BNT">BNT</option>
              <option value="莫德納">莫德納</option>
              <option value="AZ">AZ</option>
              <option value="嬌生">嬌生</option>
              <option value="高端/連雅">
                高端 / 連雅
              </option>
              <option value="科興">科興</option>
            </select>
            <p className="fz-16 display-none">
              *項目不可為空
            </p>
          </div>
          <div className="remark-content">
            <label htmlFor="remark">備註</label>

            <textarea
              id="remark"
              type="text"
              name="remark"
              className="remark input-style"
              // value={fields.remark}
              // onChange={this.handleInputChange}
            />
            <p className="fz-16">
              *有藥物過敏或特殊病史請填寫備註
            </p>
          </div>
        </div>
        <div className="padding-t-20">
          <input
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

export default VaccineReservationForm
