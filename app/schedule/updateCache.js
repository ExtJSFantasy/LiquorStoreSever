'use strict';
const Subscription = require('egg').Subscription;
class updateCache extends Subscription {
  static get schedule() {
    return {
      interval: '2h', // 10s间隔
      type: 'all', // 指定所有的 worker 都需要执行
      disable: true // 配置该参数为 true 时，这个定时任务不会被启动。
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const config = this.ctx.app.config.wechat_config;
    const url = config.getAccessTokenUrl.replace('APPID', config.appId).replace('APPSECRET', config.appSecret);
    const res = await this.ctx.curl(url, {
      dataType: 'json'
    });
    console.log(res.data.access_token);
    this.ctx.app.access_token = res.data.access_token;
  }
}
module.exports = updateCache;
