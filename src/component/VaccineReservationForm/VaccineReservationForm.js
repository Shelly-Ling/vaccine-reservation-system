import React, {
  useState,
  useContext,
  useEffect,
} from "react"
import "./VaccineReservationForm.scss"
import { AppStateContext } from "../../container/Home/Home"
import { AppDispatchContext } from "../../container/Home/Home"

import DeleteIcon from "../Icons/DeleteIcon/DeleteIcon"
import {
  nameFormatCheck,
  phoneFormatCheck,
  birthFormatCheck,
  identityNumberFormatCheck,
  vaccineTypeFormatCheck,
  dayForVaccinationFormatCheck,
} from "../../js/fieldsFormatCheck"

function VaccineReservationForm() {
  const { globalState } = useContext(AppStateContext)
  const { dispatch } = useContext(AppDispatchContext)

  const [formData, setFormData] = useState({
    fields: {
      name: "",
      birth: "",
      identityNumber: "",
      phone: "",
      vaccineType: "",
      dayForVaccination: "",
      remark: "",
    },
  })

  useEffect(() => {
    if (globalState.isEditing) {
      setFormData({
        fields: {
          ...globalState.editData,
        },
      })
    }
  }, [globalState.isEditing])

  function allFormatCheck() {
    const checkResult =
      nameFormatCheck(formData.fields.name) &&
      identityNumberFormatCheck(
        formData.fields.identityNumber
      ) &&
      birthFormatCheck(formData.fields.birth) &&
      phoneFormatCheck(formData.fields.phone) &&
      vaccineTypeFormatCheck(
        formData.fields.vaccineType
      ) &&
      dayForVaccinationFormatCheck(
        formData.fields.dayForVaccination
      )

    return checkResult
  }

  const reservationFormPageID =
    globalState.pageData.reservationForm.id
  const editReservationPageID =
    globalState.pageData.editReservation.id

  function handleInputChange(event) {
    const { target } = event
    const name = target.name

    const value =
      target.type === "checkbox"
        ? target.checked
        : target.value

    setFormData((prevState) => ({
      fields: { ...prevState.fields, [name]: value },
    }))
  }

  function onReserveSubmitBtnClick() {
    if (allFormatCheck()) {
      let newReservedList = [...globalState.reservedList]

      newReservedList.unshift(formData.fields)

      localStorage.setItem(
        "reservedList",
        JSON.stringify(newReservedList)
      )

      dispatch({
        type: "creatNewReservation",
        payload: newReservedList,
      })
    }
  }

  function onEditSubmitBtnClick() {
    if (allFormatCheck()) {
      let editedReservedList =
        globalState.reservedList.map((item) => {
          return item.identityNumber ===
            globalState.editData.identityNumber
            ? formData.fields
            : item
        })

      localStorage.setItem(
        "reservedList",
        JSON.stringify(editedReservedList)
      )

      let editedFilterReservedList =
        globalState.filterReservedList.map((item) => {
          return item.identityNumber ===
            formData.fields.identityNumber
            ? formData.fields
            : item
        })

      dispatch({
        type: "onEditSubmitBtnClick",
        payload: {
          editedReservedList,
          editedFilterReservedList,
        },
      })
    }
  }

  return (
    <div
      className={`reservation-form__wrap contain-width ${
        globalState.isEditing ? "edit-modal-style" : ""
      }`}
    >
      <div className="form__header padding-t-30">
        <h1 className="title fz-35 fz-bold display-inline-block">
          表單標題
        </h1>
        <span className="required-icon padding-l-20">
          *
        </span>
        <span className="required-icon">為必填</span>

        {globalState.isEditing ? (
          <div
            onClick={() =>
              dispatch({
                type: "onEditingCancelBtnClick",
              })
            }
          >
            <DeleteIcon />
          </div>
        ) : null}
      </div>

      <div className="input-list">
        <div className="name-content padding-r-10">
          <label htmlFor="name" className="display-block">
            <span className="required-icon">*</span>
            姓名
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="input-name input-style"
            autoFocus
            value={formData.fields.name}
            onChange={handleInputChange}
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
            value={formData.fields.identityNumber}
            onChange={handleInputChange}
            disabled={
              globalState.nowPageId ===
              editReservationPageID
            }
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
            value={formData.fields.birth}
            onChange={handleInputChange}
          />
          <p className="fz-16 display-none">
            *項目不可為空
          </p>
          <p className="fz-16">
            *若您生日為民國80年1月1日，請輸入0800101
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
            value={formData.fields.phone}
            onChange={handleInputChange}
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
            value={formData.fields.vaccineType}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --請選擇--
            </option>
            <option value="BNT">BNT</option>
            <option value="莫德納">莫德納</option>
            <option value="AZ">AZ</option>
            <option value="嬌生">嬌生</option>
            <option value="高端/連雅">高端 / 連雅</option>
            <option value="科興">科興</option>
          </select>
          <p className="fz-16 display-none">
            *項目不可為空
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
            value={formData.fields.dayForVaccination}
            onChange={handleInputChange}
          />
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
            value={formData.fields.remark}
            onChange={handleInputChange}
          />
          <p className="fz-16">
            *有藥物過敏或特殊病史請填寫備註
          </p>
        </div>
      </div>
      <div className="padding-t-20">
        <button
          name="submit-btn"
          className="btn-submit fz-26 input-submit-style btn-color-pink-white"
          onClick={() =>
            globalState.nowPageId ===
            reservationFormPageID
              ? onReserveSubmitBtnClick()
              : onEditSubmitBtnClick()
          }
        >
          提交
        </button>
      </div>
    </div>
  )
}

export default VaccineReservationForm
