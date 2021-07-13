/**
 * @description input 欄掛上提示 class 樣式 與欄位提示字串
 * @param {string} elementId
 * @param {string} alertString
 */
function addInvalidityClass(elementId, alertString) {
  const idString = `.${elementId}`
  const pTagString = `.${elementId} ~ p`

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
function removeInvalidityClass(elementId) {
  const idString = `.${elementId}`
  const pTagString = `.${elementId} ~ p`

  const inputField = document.querySelector(idString)

  const invalidityTextNote =
    document.querySelector(pTagString)

  inputField.classList.remove("invalidity")
  invalidityTextNote.classList.remove("invalidity-text")
}

function nameFormatCheck(name) {
  //若姓名欄位為空，加上報錯 class，反之移除報錯 class
  if (name === "") {
    addInvalidityClass("input-name", "*姓名欄位不可為空")
    return false
  } else {
    removeInvalidityClass("input-name")
    return true
  }
}

function phoneFormatCheck(phone) {
  const phoneLength = phone.length
  const requestPhoneNumberLength = 10

  if (phoneLength < requestPhoneNumberLength) {
    addInvalidityClass(
      "phone",
      "*手機號碼為10位數字，您輸入低於10位數"
    )
    return false
  } else if (phoneLength === requestPhoneNumberLength) {
    //number 正則說明: 數字格式
    const number = `^[0-9]*$`
    //  const phoneNumber = formData.fields.phone

    if (phone.match(number) !== null) {
      removeInvalidityClass("phone")
      return true
    } else {
      addInvalidityClass("phone", "*手機號碼須為數字")
      return false
    }
  } else if (phone === "") {
    //若手機號欄位為空
    addInvalidityClass("phone", "*手機號碼欄位不可為空")
    return false
  } else {
    return true
  }
}

function birthFormatCheck(birth) {
  const birthDataLength = birth.length
  const requestBirthDataLength = 7

  if (birth === "") {
    //若生日號欄位為空
    addInvalidityClass("birth", "*生日欄位不可為空")
    return false
  } else if (birthDataLength < requestBirthDataLength) {
    addInvalidityClass(
      "birth",
      "*生日為7位數字，目前過少"
    )
    return false
  } else if (birthDataLength === requestBirthDataLength) {
    removeInvalidityClass("birth")

    const birthYearStartIndex = 0
    const birthYearEndIndex = 3
    const birthMonthStartIndex = 3
    const birthMonthEndIndex = 5
    const birthDayStartIndex = 5
    const birthDayEndIndex = 7

    //birthData 生日資料切下來的 年/月/日 字串
    const birthYear = Number(
      birth.slice(birthYearStartIndex, birthYearEndIndex)
    )
    const birthMonth = Number(
      birth.slice(
        birthMonthStartIndex,
        birthMonthEndIndex
      )
    )
    const birthDay = Number(
      birth.slice(birthDayStartIndex, birthDayEndIndex)
    )

    const requestMinNumber = 1
    const monthMaxNumber = 12
    const dayMaxNumber = 31

    //驗證生日字串
    if (birthYear < requestMinNumber) {
      addInvalidityClass("birth", "*年份可能輸錯請確認")
      return false
    } else if (
      birthMonth > monthMaxNumber ||
      birthMonth < requestMinNumber
    ) {
      addInvalidityClass("birth", "*月份可能輸錯請確認")
      return false
    } else if (
      birthDay > dayMaxNumber ||
      birthDay < requestMinNumber
    ) {
      addInvalidityClass("birth", "*出生日可能輸錯請確認")
      return false
    }

    //number 正則說明: 數字格式
    const number = `^[0-9]*$`
    const birthString = birth.toString()

    if (birthString.match(number) === null) {
      addInvalidityClass("birth", "*生日欄位須為數字")
      return false
    } else {
      removeInvalidityClass("birth")
      return true
    }
  }
}

/**
 *@description 檢查手機號碼欄位 class: identityNumber
 */
function identityNumberFormatCheck(identityNumber) {
  const idNumberLength = identityNumber.length
  const requestIdNumberLength = 10

  if (identityNumber === "") {
    //若手機號欄位為空
    addInvalidityClass(
      "identityNumber",
      "*身分證號欄位不可為空"
    )
    return false
  } else if (idNumberLength === requestIdNumberLength) {
    // 身分證號核對
    const idFirstLetterStartIndex = 0
    const idFirstLetterEndIndex = 1
    const idNumberStartIndex = 1

    //lowerCaseLetters 正則說明: 英文小寫
    const lowerCaseLetters = "[a-z]"
    const letters = "[a-zA-Z]"

    const idDataFirstLetter = identityNumber.slice(
      idFirstLetterStartIndex,
      idFirstLetterEndIndex
    )
    const idNumbers = identityNumber.slice(
      idNumberStartIndex
    )

    if (idDataFirstLetter.match(letters) === null) {
      addInvalidityClass(
        "identityNumber",
        "*身份證開頭須為大寫英文字母"
      )
      return false
    }

    if (
      idDataFirstLetter.match(lowerCaseLetters) !== null
    ) {
      addInvalidityClass(
        "identityNumber",
        "*您輸入小寫英文開頭，身份證開頭須為大寫英文"
      )
      return false
    }

    //number 正則說明: 數字格式
    const number = `^[0-9]*$`

    if (idNumbers.match(number) === null) {
      addInvalidityClass(
        "identityNumber",
        "*身份證後 9 碼須為數字"
      )
      return false
    } else {
      removeInvalidityClass("identityNumber")

      return true
    }
  } else if (idNumberLength < requestIdNumberLength) {
    addInvalidityClass(
      "identityNumber",
      "*身分證號欄位為英文開頭加數字共10位數"
    )
    return false
  }
}

/**
 *@description 檢查疫苗種類欄位 class: vaccine-type
 */
function vaccineTypeFormatCheck(vaccineType) {
  if (vaccineType) {
    removeInvalidityClass("vaccine-type")
    return true
  } else if (
    vaccineType === "請選擇" ||
    vaccineType === ""
  ) {
    addInvalidityClass("vaccine-type", "*請選擇疫苗種類")
    return false
  }
}

/**
 *@description 檢查施打日期欄位 class: booking-date
 */
function dayForVaccinationFormatCheck(dayForVaccination) {
  if (dayForVaccination) {
    removeInvalidityClass("booking-date")

    return true
  } else {
    addInvalidityClass(
      "booking-date",
      "*日期欄位不可為空"
    )
    return false
  }
}

export {
  addInvalidityClass,
  removeInvalidityClass,
  nameFormatCheck,
  phoneFormatCheck,
  birthFormatCheck,
  identityNumberFormatCheck,
  vaccineTypeFormatCheck,
  dayForVaccinationFormatCheck,
}
