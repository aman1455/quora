import { Route, Routes } from 'react-router-dom';
import LoginComp from '../components/Login/LoginComp';
import PrivateRoute from './Private';
import { Home } from './home';
import LoginRoute from './LoginRoute';
import Navbar from '../components/NavbarSidebar/Navbar';
import Sidebar from "../components/NavbarSidebar/Sidebar"
import Question from '../components/Question'
import Notifications from '../components/Notifications/Notifications';
import WholeMusicComp from '../components/NavbarSidebar/Music/WholeMusicComp';
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
      <Route path="/notifications"
        element={<>
    <Notifications/>
         </>
         
        }/>
      <Route path="/music"
        element={<>
    <WholeMusicComp/>
         </>
         
        }/>
    </Routes>
  );
}
export default AllRoutes;
