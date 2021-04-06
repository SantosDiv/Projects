import { GET_USERS } from './actionTypes';
// import { Octokit } from "@octokit/core";

const getUser = (users) => ({
  type: GET_USERS,
  users,
});

export const fetchAPIGitHub = (username) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${username}+in:login&per_page=5`
    )
    const users = await response.json();
    dispatch(getUser(users.items));
  } catch (error) {
    console.log(error);
  }
}

