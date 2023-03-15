import { createStore, combineReducers } from 'redux';
import AuthReducer from './Auth/reducer';

const combinedReducers = combineReducers({
  AuthReducer: AuthReducer,
});

let store = createStore(combinedReducers);

export default store;
