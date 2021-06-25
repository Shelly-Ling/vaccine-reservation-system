/**
 *@description 檢查姓名欄位 id: name
 * @param {string} event
 */
const nameFormatCheck = function (event) {
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

export default nameFormatCheck
