import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import EditorContainer from "./containers/EditorContainer"
import Remarkable from "remarkable"

//const store = createStore(markdown)
const rootEl = document.getElementById("root")

function render() {
  ReactDOM.render(
    <EditorContainer />,
    rootEl
  )
}

render()
//store.subscribe(render)
