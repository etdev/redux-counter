import React, { Component, PropTypes } from "react"
import Editor from "../components/Editor"
import Preview from "../components/Preview"
import Remarkable from "remarkable"
const md = new Remarkable

export default class EditorContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { contentMd: "YOLO", contentHtml: "unchanged" };
    this.updatePreview = this.updatePreview.bind(this)
  }

  updatePreview() {
    let contentMd = document.getElementById("editor-content").value
    this.setState({ contentMd: contentMd, contentHtml: md.render(contentMd) })
    console.log("updatePreview called in EditorContainer")
  }

  render() {
    return (
      <div className="editor-container">
        <Editor
          contentMd={this.state.contentMd}
          updatePreview={this.updatePreview}
        />
        <Preview
          contentHtml={this.state.contentHtml}
        />
      </div>
    );
  }

}
