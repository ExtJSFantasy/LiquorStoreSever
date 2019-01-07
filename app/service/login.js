'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async login(data) {
    // await this.app.mysql.get('posts', { id: 12 });
    const info = await this.app.mysql.get('t_user', {
      username: `${data.userName}`,
    });
    return info;
  }
  async testHttp() {
    const url = 'https://registry.npm.taobao.org/egg/latest';
    const result = await this.ctx.curl(`${url}`, {
      dataType: 'JSON',
      timeout: 3000,
    });
    return {
      status: result.status,
      headers: result.headers,
      package: JSON.parse(result.data),
    };
  }
  async testTpl(data) {
    // await this.app.mysql.get('posts', { id: 12 });
    const info = await this.app.mysql.get('t_user', {
      username: `${data.userName}`,
    });
    return info;
  }
  async insertTest(data) {
    const result = await this.app.mysql.insert('t_user', {
      username: data,
    });
    if (result.affectedRows === 1) {
      return {
        status: 200,
        msg: '插入成功',
      };
    } else {
      return {
        status: 500,
        msg: '插入失败',
      };
    }
  }
}
module.exports = LoginService;
