import "./Modal.scss"
import DeleteIcon from "../Icons/DeleteIcon/DeleteIcon"

function Modal({ title, detailInfo }) {
  return (
    <div className="modal__wrap">
      <div className="modal edit-modal margin-0-auto padding-10 border-radius-50 ">
        <DeleteIcon />
        <div className="title fz-35 text-align-center padding-t-30">
          {title ? title : "title 標題"}
        </div>
        <div className="detailInfo text-align-center padding-t-30">
          {detailInfo ? detailInfo : "detailInfo 說明"}
        </div>
      </div>
    </div>
  )
}

export default Modal
