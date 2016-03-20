import React, { Component, PropTypes } from "react"

export default class Editor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Markdown Content
        <p> { this.props.contentMd } </p>
        Rendered Content
        <p> { this.props.contentHtml } </p>
        <button type="button" onClick={ this.props.updatePreview }>
          Render
        </button>
      </div>
    )
  }
}

Editor.propTypes = {
  contentMd: PropTypes.string.isRequired,
  updatePreview: PropTypes.func.isRequired,
  contentHtml: PropTypes.string.isRequired
}
