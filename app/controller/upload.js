'use strict';
// node.js 文件操作对象
const fs = require('fs');
// node.js 路径操作对象
const path = require('path');
const mkdirs = require('jm-mkdirs');
// egg.js Controller
const Controller = require('egg').Controller;
// 故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
// 管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');
// 当然你也可以不使用这个 哈哈 个人比较赖 还有我们这里使用了egg-multipart
// const md5 = require('md5');
// const Controller = require('egg').Controller;
/**
 *单文件上传
 *
 * @class UploadController
 * @extends {Controller}
 */
class UploadController extends Controller {
  async index() {
    const ctx = this.ctx;
    // egg-multipart 已经帮我们处理文件二进制对象 node.js 和 php 的上传唯一的不同就是 ，php 是转移一个 临时文件 node.js
    // 和 其他语言（java c#） 一样操作文件流
    const stream = await ctx.getFileStream();
    // 新建一个文件名
    // const filename = md5(stream.filename) + path
    // .extname(stream.filename)
    // .toLocaleLowerCase();
    // 获取文件名 md5(stream.filename) +
    /**
     * 这样的话可以覆盖旧的图片
     */
    const filename = stream.filename;
    // 文件生成绝对路径

    const uploadsPath = 'app/public/uploads/' + new Date().getFullYear() + (new Date().getMonth() + 1 < 10 ? '0'+(new Date().getMonth() + 1) : new Date().getMonth() + 1 );

    if (!fs.existsSync(uploadsPath)) {
      mkdirs.sync(uploadsPath);
    }

    const target = path.join(this.config.baseDir, uploadsPath, filename);
    // 生成一个文件写入 文件流
    const writeStream = fs.createWriteStream(target);
    try {
      // 异步把文件流 写入
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      // 如果出现错误，关闭管道
      await sendToWormhole(stream);
      console.log('1111', err);
      throw err;
    }
    // return '/public/uploads/' + new Date().getFullYear() + (new Date().getMonth() + 1) + '/' + filename;
    // 文件响应;
    ctx.body = {
      url: '/public/uploads/' + new Date().getFullYear() + (new Date().getMonth() + 1) + '/' + filename
    };
  }
}

module.exports = UploadController;
