import grade from '../dbhelper/grade';
import ApiError from '../error/apiError';
import ApiErrorNames from '../error/apiErrorNames';

const queryGrade = async ctx => {
  const params = ctx.request.query;
  try {
    const res = await grade.queryFind(params);
    ctx.body = res
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const addGrade = async ctx => {
  const params = ctx.request.body;
  try {
    await grade.queryAdd(params);
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const deleteGrade = async ctx => {
  const params = ctx.request.body;
  try {
    await grade.queryDelete(params);
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const getGrade = async ctx => {
  const params = ctx.request.query;
  try {
    const res = await grade.queryItem(params);
    ctx.body = res[0];
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

const updateGrade = async ctx => {
  const params = ctx.request.body;
  try {
    await grade.queryUpdate(params);
  } catch (err) {
    throw new ApiError(ApiErrorNames.DB_OPERATION_EXCEPTION);
  }
}

export default {
  queryGrade,
  addGrade,
  deleteGrade,
  getGrade,
  updateGrade,
}