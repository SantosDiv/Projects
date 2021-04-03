import * as api from '../services/dataCourses';
export const sendUsername = (SINGIN_SINGUP, username) => ({ type: SINGIN_SINGUP, username });

const getCourses = (courses) => ({
  type: 'FETCH',
  courses,
});

export const fecthCourses = () => async (dispatch) => {
  try {
    const courses = await api.coursesStudy();
    dispatch(getCourses(courses));
  } catch (error) {
    console.log(error);
  }
};
