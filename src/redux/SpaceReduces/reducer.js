import { GET_Spaces_Books_DATA_REQUEST } from "./actionType";

const initialState = {
    spaces_books: [],
    isLoading: false,
    isError: false,
  };

  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_Spaces_Books_DATA_REQUEST:
        return {
          ...state,
          spaces_books: payload
        }
  
      default:
        return state;
    }
  };

  export { reducer };