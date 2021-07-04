/**
 *@description 檢查姓名欄位 id: name
 * @param {string} event
 */
export default function nameFormatCheck(event) {
  if (this.state.fields.name) {
    this.removeInvalidityClass(
      "name",
      "*姓名欄位不可為空"
    )
    return true
  } else {
    this.addInvalidityClass("name", "*姓名欄位不可為空")
    return false
  }
}
