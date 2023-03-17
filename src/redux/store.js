import { createStore, combineReducers } from 'redux';
import AuthReducer from './Auth/reducer';
import { reducer as Space_reduces } from './SpaceReduces/reducer';

const combinedReducers = combineReducers({
  AuthReducer: AuthReducer,
  Space_reduces:Space_reduces
});

let store = createStore(combinedReducers);

export default store;
