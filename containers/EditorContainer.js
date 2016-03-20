import React, { Component, PropTypes } from "react"
import Editor from "../components/Editor"
import Remarkable from "remarkable"
const md = new Remarkable

export default class EditorContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { contentMd: "YOLO", contentHtml: "unchanged" };
    this.updatePreview = this.updatePreview.bind(this)
  }

  updatePreview() {
    let contentMd = document.getElementById("ta-editor").value
    this.setState({ contentMd: contentMd, contentHtml: md.render(contentMd) })
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
