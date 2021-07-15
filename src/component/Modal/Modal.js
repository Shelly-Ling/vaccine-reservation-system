import "./Modal.scss"
import { useContext } from "react"
import DeleteIcon from "../Icons/DeleteIcon/DeleteIcon"
import { AppStateContext } from "../../container/Home/Home"

import { AppDispatchContext } from "../../container/Home/Home"

function Modal() {
  const { globalState } = useContext(AppStateContext)
  const { dispatch } = useContext(AppDispatchContext)

  return (
    <div className="modal__wrap">
      <div className="modal edit-modal margin-0-auto padding-10 border-radius-50 ">
        <div
          onClick={() =>
            dispatch({
              type: "closeAlertModal",
            })
          }
        >
          <DeleteIcon />
        </div>
        <div className="title fz-35 text-align-center padding-t-30">
          {globalState.alertInfo.title
            ? globalState.alertInfo.title
            : "title 標題"}
        </div>
        <div className="detailInfo text-align-center padding-t-30">
          {globalState.alertInfo.detailInfo
            ? globalState.alertInfo.detailInfo
            : "detailInfo 說明"}
        </div>
      </div>
    </div>
  )
}

export default Modal
