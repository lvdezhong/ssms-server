import ApiErrorNames from'./apiErrorNames';

/**
 * 自定义Api异常
 */
class ApiError extends Error {
  //构造方法
  constructor(errorName){
    super();
    const errorInfo = ApiErrorNames.getErrorInfo(errorName);
    this.name = errorName;
    this.code = errorInfo.code;
    this.message = errorInfo.message;
  }
}

export default ApiError;
