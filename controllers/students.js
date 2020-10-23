import students from '../dbhelper/students';
import ApiError from '../error/apiError';
import ApiErrorNames from '../error/apiErrorNames';

const queryStudents = async ctx => {
  const params = ctx.request.query;
  try {
    const res = await students.queryFind(params);
    ctx.body = res
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const addStudents = async ctx => {
  const params = ctx.request.body;
  try {
    await students.queryAdd(params);
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const deleteStudents = async ctx => {
  const params = ctx.request.body;
  try {
    await students.queryDelete(params);
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const getStudents = async ctx => {
  const params = ctx.request.query;
  try {
    const res = await students.queryItem(params);
    ctx.body = res[0];
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const updateStudents = async ctx => {
  const params = ctx.request.body;
  try {
    await students.queryUpdate(params);
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

export default {
  queryStudents,
  addStudents,
  deleteStudents,
  getStudents,
  updateStudents,
}