import React, { PropTypes } from "react"
import Counter from "../components/Counter"

export default class CounterContainer extends React.Component {
  constructor() {
    super()
    this.state = { count: 5 }
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  incrementCount() {
    let count = this.state.count
    this.setState({ count: count + 1 })
  }

  decrementCount() {
    let count = this.state.count
    this.setState({ count: count - 1 })
  }

  render() {
    return (
      <Counter
        count={ this.state.count }
        incrementCount={ this.incrementCount }
        decrementCount={ this.decrementCount }
      />
    )
  }
}
