import React, { Component, PropTypes } from "react"

export default class Editor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="editor">
        <p>Markdown Content:</p>
        <textarea id="editor-content" value={ this.props.contentMd } onChange={ this.props.updatePreview }>
        </textarea>
      </div>
    )
  }
}

Editor.propTypes = {
  contentMd: PropTypes.string.isRequired,
  updatePreview: PropTypes.func.isRequired,
}
