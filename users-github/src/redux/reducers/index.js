import { combineReducers } from "redux";
import usersReducer from './userReducer';
import repoReducer from './repoReducer';

const rootReducers = combineReducers({
  usersReducer,
  repoReducer,
});

export default rootReducers;