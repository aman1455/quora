function PostReducer(state = [], action) {
  if (action.type === "post_data") {
    return action.payload
  }
  return state
}
export default PostReducer
