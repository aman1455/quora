import { createStore, combineReducers } from "redux"
import AuthReducer from "./Auth/reducer"
import { reducer as Space_reduces } from "./SpaceReduces/reducer"
import UserReducer from "./User/reducer"
import QuestionReducer from "./Question/reducer"
import AnswerReducer from "./Answers/reducer"

const combinedReducers = combineReducers({
  AuthReducer: AuthReducer,
  Space_reduces: Space_reduces,
  UserReducer: UserReducer,
  QuestionReducer: QuestionReducer,
  AnswerReducer: AnswerReducer,
})

let store = createStore(combinedReducers)

export default store
