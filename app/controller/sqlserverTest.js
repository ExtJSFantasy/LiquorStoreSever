'use strict';

const Controller = require('egg').Controller;

class SqlserverTestController extends Controller {
  async index() {
    await this.service.cfInfo.index().then(result => {
      this.ctx.body = result;
    }).catch(err => {
      console.log('111', err);
    });
  }
}

module.exports = SqlserverTestController;
