const LOGIN = 'LOGIN';
const sendUsername = (username) => ({ type: LOGIN, username });

export default sendUsername;