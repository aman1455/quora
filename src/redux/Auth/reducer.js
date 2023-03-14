const initialState = {
  isAuth: false,
  token: '',
};
function AuthReducer(state = initialState, action) {
  if (action.type === 'authIt') {
    return {
      ...state,
      isAuth: true,
      token: action.token,
    };
  }
  return state;
}

export default AuthReducer;
