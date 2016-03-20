import React, { PropTypes } from "react"
import Counter from "../components/Counter"

export default class CounterContainer extends React.Component {
  constructor() {
    super()
    this.state = { count: 5 }
  }

  render() {
    return (
      <Counter count={ this.state.count }/>
    )
  }
}
