import { React, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import AllRoutes from "../src/routes/AllRoutes"

import Question from "./components/QuestionPage/Question"
import axios from "axios"

import AnswerPageApp from "./components/AnswersPage/AnswerPageApp"
function App() {
  let dispatch = useDispatch()
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("AuthData")) || null
    console.log(data)
    if (data) {
      dispatch({
        type: "authIt",
        token: data.token,
      })
    }
  }, [])
  // let [state, setState] = useState({ imageUrl: "" })
  // useEffect(() => {
  //   axios.get("http://localhost:8080/posts").then((res) => {
  //     setState(res.data[0])
  //   })
  // })
  return <AllRoutes />
  // return <Spaces_Page />
  // return (
  //   <>
  //     {/* <img src={state.imageUrl} /> */}
  //     <Question />
  //   </>
  // )
}

export default App
