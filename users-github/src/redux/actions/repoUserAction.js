import { GET_REPO, REQUEST_USER } from './actionTypes';

const requestUser = () => ({
  type: REQUEST_USER,
});

const getUser = (repositories) => ({
  type: GET_REPO,
  repositories,
});

export const repoUser = (repoURL) => async (dispatch) => {
  dispatch(requestUser());
  try {
    const response = await fetch(repoURL);
    const repositories = await response.json();
    dispatch(getUser(repositories));
  } catch (error) {
    console.log(error);
  }
}
