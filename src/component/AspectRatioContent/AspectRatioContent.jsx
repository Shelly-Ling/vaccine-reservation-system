import React, { Fragment } from "react"

export default function AspectRatioContent(props) {
  const { widthScale, heightScale } = props
  const paddingSpacing = (heightScale * 100) / widthScale

  const contentPaddingStyle = {
    width: "100%",
    height: "100%",
    paddingTop: paddingSpacing + "%",
  }

  return (
    <Fragment>
        <div
          className="prepare-content-space"
          style={contentPaddingStyle}
        ></div>
        <div className="aspect-ratio-content">
          {props.children}
        </div>
    </Fragment>
  )
}
