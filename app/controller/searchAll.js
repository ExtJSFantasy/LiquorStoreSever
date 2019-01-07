'use strict';
const fs = require('fs');
const Controller = require('egg').Controller;

class SearchAllController extends Controller {
  // 验证车型
  async identifyCarType() {
    const imgSrc = this.ctx.request.files[0].filepath;
    await this.service.searchAll
      .identifyCarType(imgSrc)
      .then(result => {
        // 删除临时文件,异步函数需要回调，不然node检测时会警告
        fs.unlink(imgSrc, function(err) {
          if (err) {
            throw err;
          }
          console.log('文件:' + imgSrc + '删除成功！');
        });
        this.ctx.body = result;
      })
      .catch(err => {
        console.log(err);
      });
  }
  // 验证logo
  async identifyLogos() {
    const imgSrc = this.ctx.request.files[0].filepath;
    await this.service.searchAll
      .identifyLogos(imgSrc)
      .then(result => {
        // 删除临时文件,异步函数需要回调，不然node检测时会警告
        fs.unlink(imgSrc, function(err) {
          if (err) {
            throw err;
          }
          console.log('文件:' + imgSrc + '删除成功！');
        });
        this.ctx.body = result;
      })
      .catch(err => {
        console.log(err);
      });
  }
  // 动物识别
  async identifyAnimal() {
    const imgSrc = this.ctx.request.files[0].filepath;
    await this.service.searchAll
      .identifyAnimal(imgSrc)
      .then(result => {
        // 删除临时文件,异步函数需要回调，不然node检测时会警告
        fs.unlink(imgSrc, function(err) {
          if (err) {
            throw err;
          }
          console.log('文件:' + imgSrc + '删除成功！');
        });
        this.ctx.body = result;
      })
      .catch(err => {
        console.log(err);
        this.ctx.body = err;
      });
  }
  // 植物识别
  async identifyPlant() {
    const imgSrc = this.ctx.request.files[0].filepath;
    await this.service.searchAll
      .identifyPlant(imgSrc)
      .then(result => {
        // 删除临时文件,异步函数需要回调，不然node检测时会警告
        fs.unlink(imgSrc, function(err) {
          if (err) {
            throw err;
          }
          console.log('文件:' + imgSrc + '删除成功！');
        });
        this.ctx.body = result;
      })
      .catch(err => {
        this.ctx.body = err;
      });
  }
  // 身份证识别
  async identifyIdcard() {
    const imgSrc = this.ctx.request.files[0].filepath;
    const req = this.ctx.request.body;
    console.log(this.ctx.request);
    const idCardSide = req.idCardSide;
    await this.service.searchAll
      .identifyIdcard(imgSrc, idCardSide)
      .then(result => {
        // 删除临时文件,异步函数需要回调，不然node检测时会警告
        fs.unlink(imgSrc, function(err) {
          if (err) {
            throw err;
          }
          console.log('文件:' + imgSrc + '删除成功！');
        });
        this.ctx.body = result;
      })
      .catch(err => {
        this.ctx.body = err;
      });
  }
  // 银行卡识别
  async identifyBankcard() {
    const imgSrc = this.ctx.request.files[0].filepath;
    await this.service.searchAll
      .identifyBankcard(imgSrc)
      .then(result => {
        // 删除临时文件,异步函数需要回调，不然node检测时会警告
        fs.unlink(imgSrc, function(err) {
          if (err) {
            throw err;
          }
          console.log('文件:' + imgSrc + '删除成功！');
        });
        this.ctx.body = result;
      })
      .catch(err => {
        this.ctx.body = err;
      });
  }
  // 驾驶证识别
  async identifyDrivingLicense() {
    const imgSrc = this.ctx.request.files[0].filepath;
    await this.service.searchAll
      .identifyDrivingLicense(imgSrc)
      .then(result => {
        // 删除临时文件,异步函数需要回调，不然node检测时会警告
        fs.unlink(imgSrc, function(err) {
          if (err) {
            throw err;
          }
          console.log('文件:' + imgSrc + '删除成功！');
        });
        this.ctx.body = result;
      })
      .catch(err => {
        console.log(err);
      });
  }
  // 行驶证识别
  async identifyVehicleLicense() {
    const imgSrc = this.ctx.request.files[0].filepath;
    await this.service.searchAll
      .identifyVehicleLicense(imgSrc)
      .then(result => {
        // 删除临时文件,异步函数需要回调，不然node检测时会警告
        fs.unlink(imgSrc, function(err) {
          if (err) {
            throw err;
          }
          console.log('文件:' + imgSrc + '删除成功！');
        });
        this.ctx.body = result;
      })
      .catch(err => {
        console.log(err);
      });
  }
  // 车牌识别
  async identifyLicensePlate() {
    const imgSrc = this.ctx.request.files[0].filepath;
    await this.service.searchAll
      .identifyLicensePlate(imgSrc)
      .then(result => {
        // 删除临时文件,异步函数需要回调，不然node检测时会警告
        fs.unlink(imgSrc, function(err) {
          if (err) {
            throw err;
          }
          console.log('文件:' + imgSrc + '删除成功！');
        });
        this.ctx.body = result;
      })
      .catch(err => {
        console.log(err);
      });
  }
  // 营业执照识别
  async identifyBusinessLicense() {
    const imgSrc = this.ctx.request.files[0].filepath;
    await this.service.searchAll
      .identifyBusinessLicense(imgSrc)
      .then(result => {
        // 删除临时文件,异步函数需要回调，不然node检测时会警告
        fs.unlink(imgSrc, function(err) {
          if (err) {
            throw err;
          }
          console.log('文件:' + imgSrc + '删除成功！');
        });
        this.ctx.body = result;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = SearchAllController;
