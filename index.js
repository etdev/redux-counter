import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"

const rootEl = document.getElementById("root")

function render() {
  ReactDOM.render(
    <div>
      Redux is a steely-eyed missile man.
    </div>,
    rootEl
  )
}

render()
