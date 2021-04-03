const INITIAL_STATE = {
  courses: [],
};

const coursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH':
      return { ...state, courses: action.courses };
    default:
      return state;
  }
}

export default coursesReducer;
