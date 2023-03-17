import { React, useEffect } from "react"
import { useDispatch } from "react-redux"
import AllRoutes from "../src/routes/AllRoutes"
import SpacePageTop from "./components/SpacePage/SpacesPageTop"

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
  return <SpacePageTop />
}

export default App
