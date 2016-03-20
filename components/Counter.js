import React, { PropTypes } from "react"

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>React</p>
        <p>{ this.props.count }</p>
      </div>
    )
  }
}

Counter.propTypes = { count: PropTypes.number.isRequired }
