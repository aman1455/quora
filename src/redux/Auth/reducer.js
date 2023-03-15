import { useNavigate } from 'react-router-dom';
const initialState = {
  isAuth: false,
  token: '',
};
function AuthReducer(state = initialState, action) {
  if (action.type === 'authIt') {
    localStorage.setItem(
      'AuthData',
      JSON.stringify({ isAuth: true, token: action.token })
    );
    console.log(action.token);
    return {
      ...state,
      isAuth: true,
      token: action.token,
    };
  }
  if (action.type === 'AuthOut') {
    localStorage.removeItem('AuthData');
    return {
      ...state,
      isAuth: false,
      token: '',
    };
  }
  return state;
}

export default AuthReducer;
