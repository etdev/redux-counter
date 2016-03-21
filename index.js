import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import CounterContainer from "./containers/CounterContainer"
import * as types from "./constants/ActionTypes"
import { incrementCount } from "./actions/CounterActions"

const rootEl = document.getElementById("root")

console.log(types)

// reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
    default:
      return state
  }
}

const store = createStore(counterReducer)

console.log("store.getState() after init: " + store.getState())
store.dispatch(incrementCount())
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
