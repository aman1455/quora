import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  let data = useSelector(storeData => {
    return storeData.AuthReducer.isAuth;
  });
  return data ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
