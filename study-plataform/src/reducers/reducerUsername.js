const INITIAL_STATE = { login: false, username: '' };

const reducerUsername = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, username: action.username };
    default:
      return state;
  }
}

export default reducerUsername;