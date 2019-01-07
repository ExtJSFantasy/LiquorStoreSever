'use strict';
const Controller = require('egg').Controller;
/**
 *多文件上传
 *
 * @class MultipartUploadController
 * @extends {Controller}
 */
class MultipartUploadController extends Controller {
  async echo() {
    console.log(111);
  }
  async upload() {
    const { ctx } = this;
    const result = await ctx.service.uploadFile.upload();
    ctx.body = result;
  }
}

module.exports = MultipartUploadController;
