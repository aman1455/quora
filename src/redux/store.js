import { createStore, combineReducers } from "redux"
import AuthReducer from "./Auth/reducer"
import { reducer as Space_reduces } from "./SpaceReduces/reducer"
import UserReducer from "./User/reducer"
import QuestionReducer from "./Question/reducer"
import AnswerReducer from "./Answers/reducer"
import PostReducer from "./Posts/reducer"

const combinedReducers = combineReducers({
  AuthReducer: AuthReducer,
  Space_reduces: Space_reduces,
  UserReducer: UserReducer,
  QuestionReducer: QuestionReducer,
  AnswerReducer: AnswerReducer,
  PostReducer: PostReducer,
})

let store = createStore(combinedReducers)

export default store
