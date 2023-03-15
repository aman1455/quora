import React from 'react';

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
