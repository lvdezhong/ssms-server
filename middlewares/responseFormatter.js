/**
 * 在app.use(router)之前调用
 */
const responseFormatter = async (ctx, next) => {
  //如果有返回数据，将返回数据添加到data中
  if (ctx.body) {
    ctx.body = {
      code: 0,
      message: 'success',
      data: ctx.body,
    }
  } else {
    ctx.body = {
      code: 0,
      message: 'success',
    }
  }
}

const urlFilter = function(pattern) {
  return async function(ctx, next) {
    var reg = new RegExp(pattern);
    try {
      //先去执行路由
      await next();
      //通过正则的url进行格式化处理
      if (reg.test(ctx.originalUrl)) {
        responseFormatter(ctx);
      }
    } catch (error) {
      //如果异常类型是API异常并且通过正则验证的url，将错误信息添加到响应体中返回。
      if (reg.test(ctx.originalUrl)) {
        ctx.status = 500;
        ctx.body = {
          code: error.code,
          message: error.message
        }
      }
      // 继续抛，让外层中间件处理日志
      // throw error;
    }
  }
}

export default urlFilter