import axios from "axios"

import { GET_Spaces_Books_DATA_REQUEST } from "./actionType"
export const GET_Spaces_Books_DATA_REQUEST = (payload) => {
  return {
    type: GET_SHOES_DATA_REQUEST,
    payload,
  }
}

export const getSpace_booksData = (data) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_JSON_SERVER}/Spaces_Books`, data)
    .then((Response) => {
      cpnsole.log(Response.data)
    })
}
