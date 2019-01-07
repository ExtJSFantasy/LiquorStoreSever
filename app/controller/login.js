'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    console.log(111);
    // get方式 query, post方式用request.body
    const query = this.ctx.query;
    const login = await this.service.login.login({ userName: 'admin' });
    // let a = '123';
    // console.log(a);
    console.log(query);
    console.log('-----');
    console.log(login);
    this.ctx.body = { data: login };
  }
  // 测试网络请求
  async testHttp() {
    const test = await this.service.login.testHttp();
    this.ctx.body = test;
  }
  // 测试模板渲染
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    await this.ctx.render('test.tpl', dataList);
  }
  // 测试向表插数据
  async xdsInsert() {
    const pm = this.ctx.request.body;
    console.log(pm);
    const result = await this.service.login.insertTest(pm.userName);
    this.ctx.body = result;
  }
  // 测试上传图片
}

module.exports = LoginController;
