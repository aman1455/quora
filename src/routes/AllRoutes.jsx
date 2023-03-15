import { Route, Routes } from 'react-router-dom';
import LoginComp from '../components/Login/LoginComp';
import PrivateRoute from './Private';
import { Home } from './home';
import LoginRoute from './LoginRoute';
function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginRoute>
            <LoginComp />
          </LoginRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
export default AllRoutes;
