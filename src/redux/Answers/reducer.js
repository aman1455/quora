function AnswerReducer(state = [], action) {
  if (action.type === "Answers") {
    return action.payload
  }
  return state
}
export default AnswerReducer
