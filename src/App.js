import React, { useEffect } from 'react';
import AllRoutes from './routes/AllRoutes';
import { useDispatch } from 'react-redux';
function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('AuthData')) || null;
    console.log(data);
    if (data) {
      dispatch({
        type: 'authIt',
        token: data.token,
      });
    }
  }, []);
  return <AllRoutes />;
}

export default App;
