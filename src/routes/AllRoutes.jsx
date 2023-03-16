import { Route, Routes } from 'react-router-dom';
import LoginComp from '../components/Login/LoginComp';
import PrivateRoute from './Private';
import { Home } from './home';
import LoginRoute from './LoginRoute';
import Spaces_Page from '../components/Spaces-Page';
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
      <Route
        path="/spacespage"
        element={
          
           <Spaces_Page/>
          
        }
      />
    </Routes>
  );
}
export default AllRoutes;
