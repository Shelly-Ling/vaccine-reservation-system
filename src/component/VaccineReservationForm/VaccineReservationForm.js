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
    <div className="reservation-form__wrap">
      <div className="d-flex justify-content-between">
        <div className="padding-t-30 padding-l-20">
          <h1 className="title fz-30 fz-bold display-inline-block">
            表單標題
          </h1>
          <span className="required-mark_content fz-24 padding-l-40">
            <span className="required-icon">*</span>
            <span>為必填</span>
          </span>
        </div>
        {/* <DeleteIcon /> */}
      </div>
      <form className="form" method="get">
        <div className="input-list">
          <div className="input-list__right">
            <div className="name-content">
              <label htmlFor="name">
                <span className="required-icon">*</span>
                姓名
              </label>
              <input
                type="text"
                name="name"
                className="input-name input-style required"
                autoFocus
              />
              <p className="display-none">
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
                name="identityNumber"
                className="identityNumber input-style required "
              />
              <p className="display-none">
                *項目不可以為空
              </p>
            </div>
          </div>
          <div className="input-list__left">
            <div className="birth-content">
              <label htmlFor="birth">
                <span className="required-icon">*</span>
                生日
              </label>
              <input
                type="text"
                name="birth"
                className="birth input-style required"
                placeholder="範例: 0800101"
              />
              <p className="display-none">
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
                name="phone"
                className="phone input-style required"
              />
              <p className="display-none">
                *項目不可以為空
              </p>
            </div>
          </div>
        </div>
        <div className="submit-btn-content padding-t-20">
          <input
            name="submit-btn"
            className="input-submit-style btn-submit fz-26  btn-color-pink-white"
            type="submit"
            value="提 交"
          />
        </div>
      </form>
    </div>
  )
}

export default VaccineReservationForm
