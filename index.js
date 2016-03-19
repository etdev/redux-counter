import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import Counter from "./components/Counter"
import counter from "./reducers"

const store = createStore(counter)
const rootEl = document.getElementById("root")

function render() {
  ReactDOM.render(
    <div>
      <p>Redux is a steely-eyed missile man.</p>
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </div>,
    rootEl
  )
}

render()
store.subscribe(render)
