import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
function Post() {
  useEffect(() => {
    axios.get("http://localhost:8080/posts").then((res) => {
      console.log(res.data, "data")
    })
  }, [])
}
export {Post}
