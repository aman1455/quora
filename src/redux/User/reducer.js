function UserReducer(state = {}, action) {
  if (action.type === "user_data") {
    return action.payload
  }
  return state
}

export default UserReducer
