import course from '../dbhelper/course';
import ApiError from '../error/apiError';
import ApiErrorNames from '../error/apiErrorNames';

const queryCourse = async ctx => {
  const params = ctx.request.query;
  try {
    const res = await course.queryFind(params);
    ctx.body = res
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const addCourse = async ctx => {
  const params = ctx.request.body;
  try {
    await course.queryAdd(params);
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const deleteCourse = async ctx => {
  const params = ctx.request.body;
  try {
    await course.queryDelete(params);
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const getCourse = async ctx => {
  const params = ctx.request.query;
  try {
    const res = await course.queryItem(params);
    ctx.body = res[0];
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const updateCourse = async ctx => {
  const params = ctx.request.body;
  try {
    await course.queryUpdate(params);
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

export default {
  queryCourse,
  addCourse,
  deleteCourse,
  getCourse,
  updateCourse,
}