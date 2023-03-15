import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function LoginRoute({ children }) {
  let data = useSelector(storeData => {
    return storeData.AuthReducer.isAuth;
  });
  return data ? <Navigate to="/" /> : children;
}

export default LoginRoute;
