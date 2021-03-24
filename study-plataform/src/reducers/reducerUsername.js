const INITIAL_STATE = { login: false, username: '' };

const reducerUsername = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, login: true, username: action.username };
    case 'LOGOUT':
      return { ...state, login: false, username: ''};
    default:
      return state;
  }
}

export default reducerUsername;