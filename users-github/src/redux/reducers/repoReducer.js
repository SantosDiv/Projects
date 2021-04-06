import { GET_REPO, REQUEST_USER } from '../actions/actionTypes';

const INITIAL_STATE = {
  repositories: [],
  isRequest: false,
};

const repoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_REPO:
      return { ...state, repositories: action.repositories, isRequest: false };
    case REQUEST_USER:
      return { ...state, isRequest: true };
    default:
      return state;
  }
}

export default repoReducer;
