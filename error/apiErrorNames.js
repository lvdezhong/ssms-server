/**
 * API错误名称
 */
var ApiErrorNames = {};

ApiErrorNames.UNKNOW_ERROR = "unknowError";
ApiErrorNames.DB_OPERATION_EXCEPTION  = "dbOperationException";

/**
 * API错误名称对应的错误信息
 */
const errorMap = new Map();

errorMap.set(ApiErrorNames.UNKNOW_ERROR, { code: -1, message: '未知错误' });
errorMap.set(ApiErrorNames.DB_OPERATION_EXCEPTION, { code: 101, message: '数据库操作异常' });

//根据错误名称获取错误信息
ApiErrorNames.getErrorInfo = (errorName) => {
  var errorInfo;

  if (errorName) {
    errorInfo = errorMap.get(errorName);
  }

  //如果没有对应的错误信息，默认'未知错误'
  if (!errorInfo) {
      errorName = UNKNOW_ERROR;
      errorInfo = errorMap.get(errorName);
  }

  return errorInfo;
}

export default ApiErrorNames;
