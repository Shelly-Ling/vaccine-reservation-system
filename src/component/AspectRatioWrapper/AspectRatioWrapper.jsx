import React from "react"
import "./AspectRatioWrapper.scss"
import AspectRatioContent from '../AspectRatioContent/AspectRatioContent'

//用inline 樣式使用props下來的寬高，決定 padding-top
//inline 樣式不能使用偽元素寫法，所以給實體元素

export default function AspectRatioWrapper(props) {
  const { widthScale, heightScale } = props
  // const paddingSpacing = (heightScale * 100) / widthScale

  // const contentPaddingStyle = {
  //   width: "100%",
  //   height: "100%",
  //   paddingTop: paddingSpacing + "%",
  // }

  return (
    <div className="aspect-ratio">
      <AspectRatioContent
        widthScale={widthScale}
        heightScale={heightScale}
      >
          {props.children}
      </AspectRatioContent>
    </div>
  )
}


// export const AspectRatioWrapper = ({
//   widthScale,
//   heightScale,
// }) => {
//   return (
//     <div className="aspect-ratio">
//       <AspectRatioContent
//         {...props}
//         widthScale={widthScale}
//         heightScale={heightScale}
//       >
//         {React.Children.only(props.Children)}
//       </AspectRatioContent>
//     </div>
//   )
// }

// export const AspectRatioContent = ({
//   widthScale,
//   heightScale,
// }) => {
//   const contentPaddingStyle = {
//     "padding-top": `(${heightScale} * 100% / ${widthScale});`,
//   }

//   return (
//     <Fragment>
//       <div
//         className="prepare-content-space"
//         style={contentPaddingStyle}
//       ></div>
//       <div className="aspect-ratio-content">
//         {React.Children.only(props.Children)}
//       </div>
//     </Fragment>
//   )
// }
