import Remarkable from "remarkable"
const md = new Remarkable();

export default function markdown(state = { contentMD: "## A", contentHTML: "" }, action) {
  switch (action.type) {
    case "TO_HTML":
      console.log("TO HTML")
      console.log(state)
      return { contentMD: state.contentMD, contentHTML: md.render(state.contentMD) }
    default:
      return state
  }
}
