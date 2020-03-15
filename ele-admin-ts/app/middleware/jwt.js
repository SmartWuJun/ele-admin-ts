/*
 * @Descripttion: 登陆验证
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2019-12-31 23:59:22
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-15 15:47:25
 */
module.exports = (options, app) => {
  return async function userInterceptor(ctx, next) {
    let authToken = ctx.cookies.get('authorization') // 获取header里的authorization
    if (authToken) {
      const res = ctx.helper.verifyToken(authToken) // 解密获取的Token
      if (res) {
        // 此处使用redis进行保存
        let redis_token = ''
        res.email ? redis_token = await app.redis.get(res.email) : redis_token = await app.redis.get(res.mobile) // 获取保存的token
        if (authToken === redis_token) {
          res.email ? app.redis.expire(res.email, 7200) : app.redis.expire(res.mobile, 7200) // 重置redis过期时间
          await next()
        } else {
          ctx.body = { status: 10001, message: '您的账号已在其他地方登录' }
        }
      } else {
        ctx.body = { status: 10002, message: '登录状态已过期' }
      }
    } else {
      ctx.body = { status: 10003, message: '请登陆后再进行操作' }
    }
  }
}

