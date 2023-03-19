function QuestionReducer(state = [], action) {
  if (action.type === "Question_Data") {
    return action.payload
  }

  return state
}
export default QuestionReducer
