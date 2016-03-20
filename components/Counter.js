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
        <button onClick={ this.props.incrementCount }>
          Increment
        </button>
        <button onClick={ this.props.decrementCount }>
          Decrement
        </button>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired
}
