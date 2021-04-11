import { combineReducers } from 'redux';
import reducerUsername from './reducerUsername';
import coursesReducer from './coursesReducer';

const rootReducers = combineReducers({
  reducerUsername,
  coursesReducer,
});

export default rootReducers;