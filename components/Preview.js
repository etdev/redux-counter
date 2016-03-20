import React, { Component, PropTypes } from "react"

export default class Preview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="preview">
        <p>Rendered Content:</p>
        <p dangerouslySetInnerHTML={ {__html: this.props.contentHtml} }></p>
      </div>
    )
  }
}

Preview.propTypes = {
  contentHtml: PropTypes.string.isRequired
}
