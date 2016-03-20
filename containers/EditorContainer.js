import React, { Component, PropTypes } from "react"
import Editor from "../components/Editor"

export default class EditorContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { contentMd: "YOLO", contentHtml: "unchanged" };
    this.updatePreview = this.updatePreview.bind(this)
  }

  updatePreview() {
    this.setState({ contentHtml: "CHANGED" })
    console.log("updatePreview called in EditorContainer")
  }

  render() {
    return (
      <div className="spitz">
        <Editor
          contentMd={this.state.contentMd}
          contentHtml={this.state.contentHtml}
          updatePreview={this.updatePreview}
        />
      </div>
    );
  }

}
