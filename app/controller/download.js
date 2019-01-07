'use strict';
const path = require('path');
const fs = require('fs');
const Controller = require('egg').Controller;

class DownloadController extends Controller {
  async download() {
    // this.app.config.static.dir
    const filePath = path.resolve('app/public/uploads/201810/', 'xds123.xlsx');
    this.ctx.attachment('xds123.xlsx');
    this.ctx.set('Content-Type', 'application/octet-stream');
    this.ctx.body = fs.createReadStream(filePath);
  }
  async downloadImage() {
    const url = 'http://cdn2.ettoday.net/images/1200/1200526.jpg';
    const res = await this.ctx.curl(url, {
      streaming: true
    });

    this.ctx.type = 'jpg';
    this.ctx.body = res.res;
  }
}

module.exports = DownloadController;
