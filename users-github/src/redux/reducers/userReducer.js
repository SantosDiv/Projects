import { GET_USERS } from '../actions/actionTypes';

const INITIAL_STATE = {
  users: [],
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
}

export default usersReducer;
