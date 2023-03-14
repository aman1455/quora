import { Route, Routes } from 'react-router-dom';
import LoginComp from '../components/Login/LoginComp';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginComp />} />
    </Routes>
  );
}
export default AllRoutes;
