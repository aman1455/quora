import { React, useEffect } from "react"
import { useDispatch } from "react-redux"
import AllRoutes from "../src/routes/AllRoutes"

import AnswerPageApp from "./components/AnswersPage/AnswerPageApp"
function App() {
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   let data = JSON.parse(localStorage.getItem('AuthData')) || null;
  //   console.log(data);
  //   if (data) {
  //     dispatch({
  //       type: 'authIt',
  //       token: data.token,
  //     });
  //   }
  // }, []);
  // return <AllRoutes />;
  return <AnswerPageApp />
}

export default App
