import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import CounterContainer from "./containers/CounterContainer"

const rootEl = document.getElementById("root")

// reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

//increment action
const incrementAction = { type: "INCREMENT" }

const store = createStore(counterReducer)

console.log("store.getState() after init: " + store.getState())
store.dispatch(incrementAction)
console.log("store.getState() after incrementing once: " + store.getState())

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <CounterContainer />
    </Provider>,
    rootEl
  )
}

store.subscribe(render)
render()
