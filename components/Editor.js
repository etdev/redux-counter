import React, { Component, PropTypes } from "react"

export default class Editor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Markdown Content:</p>
        <textarea id="ta-editor" value={ this.props.contentMd } onChange={ this.props.updatePreview }>
        </textarea>
        <p>Rendered Content:</p>
        <p dangerouslySetInnerHTML={ {__html: this.props.contentHtml} }></p>
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
