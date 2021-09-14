import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import reportWebVitals from "./reportWebVitals"
// import Home from "./container/Home/Home"
// import App from "./container/HOCPractice/App.js"
// import RenderPropsApp from "./container/RenderPropsPractice/RenderPropsApp.js"
import AspectRatioWrapper from "./component/AspectRatioWrapper/AspectRatioWrapper"

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <App /> */}
    {/* <RenderPropsApp /> */}

    <AspectRatioWrapper widthScale={1} heightScale={1}>
      <div className="test">
        <img
          style={{ width: "100%" }}
          src="https://via.placeholder.com/500x500"
          alt="https://via.placeholder.com/500x500"
        />
      </div>
    </AspectRatioWrapper>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
