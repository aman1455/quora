import { Route, Routes } from 'react-router-dom';
import LoginComp from '../components/Login/LoginComp';
import PrivateRoute from './Private';
import { Home } from './home';
import LoginRoute from './LoginRoute';
import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar"
import Question from '../components/Question'
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
      {/* <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      /> */}
      <Route path="/"
        element={<><Navbar/>
         <Sidebar/>
         <Question/>
         </>
         
        }/>
    </Routes>
  );
}
export default AllRoutes;
