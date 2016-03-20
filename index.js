import React from "react"
import ReactDOM from "react-dom"
import CounterContainer from "./containers/CounterContainer"

const rootEl = document.getElementById("root")

const render = () => {
  ReactDOM.render(
    <CounterContainer />,
    rootEl
  )
}

render()
