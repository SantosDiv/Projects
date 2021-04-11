import { CHAPTER_COMPLETED } from '../actions/actionTypes';

const INITIAL_STATE = {
  courses: [],
  chaptersCompleted: [],
};

const coursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH':
      return { ...state, courses: action.courses };
    case CHAPTER_COMPLETED:
      return {
        ...state,
        courses: action.coursesWithChapterCompleted,
      }
    default:
      return state;
  }
}

export default coursesReducer;
