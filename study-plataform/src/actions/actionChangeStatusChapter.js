import { CHAPTER_COMPLETED } from './actionTypes';

const actionChangeStatusChapter = (arrayCoursesUpdate) => ({
  type: CHAPTER_COMPLETED,
  coursesWithChapterCompleted: arrayCoursesUpdate,
});

export default actionChangeStatusChapter;