'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const AipImageClassifyClient = require('baidu-aip-sdk').imageClassify;
// 设置APPID/AK/SK
const APP_ID = '14506012';
const API_KEY = 'B0HU9BZhlIB5lxFBFyqLbKid';
const SECRET_KEY = 'HU7wIVvGqIVT2STdgrBworHMjmm5KrXa';
const client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
// 文字识别
const AipOcrClient = require('baidu-aip-sdk').ocr;
const clientText = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);
class SearchAllService extends Service {
  // 新建一个对象，建议只保存一个对象调用服务接口
  async index() {
    console.log(client);
  }
  // 通用物体识别
  async identifyAllType(imgSrc) {
    const image = fs.readFileSync(imgSrc).toString('base64');
    // 如果有可选参数
    let options = {};
    options['baike_num'] = '5';

    // 带参数调用通用物体识别
    let identifyResult = client
      .advancedGeneral(image, options)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        // 如果发生网络错误
        console.log(err);
      });
    return identifyResult;
  }
  // 菜品识别
  async identifyDish(imgSrc) {
    const image = fs.readFileSync(imgSrc).toString('base64');
    // 如果有可选参数
    let options = {};
    options['top_num'] = '3';
    options['filter_threshold'] = '0.7';
    options['baike_num'] = '5';

    // 带参数调用菜品识别
    let dishResult = client
      .dishDetect(image, options)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        // 如果发生网络错误
        console.log(err);
      });
    return dishResult;
  }
  // c车辆识别
  async identifyCarType(imgSrc) {
    // console.log(1111, this.ctx.helper.excludeSpecial(imgSrc));
    const image = fs.readFileSync(imgSrc).toString('base64');
    // 调用车辆识别
    client
      .carDetect(image)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        // 如果发生网络错误
        console.log(err);
      });

    // 如果有可选参数
    const options = {};
    options['top_num'] = '3';
    options['baike_num'] = '5';

    // 带参数调用车辆识别
    const car = client
      .carDetect(image, options)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        // 如果发生网络错误
        console.log(err);
      });
    return car;
  }
  // logo识别
  async identifyLogos(imgSrc) {
    const image = fs.readFileSync(imgSrc).toString('base64'); // fs.readFileSync('assets/example.jpg').toString('base64');

    // 调用logo商标识别
    const result = await client
      .logoSearch(image)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        // 如果发生网络错误
        console.log(err);
      });
    return result;
  }
  // 动物识别
  async identifyAnimal(imgSrc) {
    const image = fs.readFileSync(imgSrc).toString('base64'); // fs.readFileSync('assets/example.jpg').toString('base64');
    // 如果有可选参数
    const options = {};
    options['top_num'] = '3';
    options['baike_num'] = '3';

    // 带参数调用动物识别
    const result = await client
      .animalDetect(image, options)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        // 如果发生网络错误
        console.log(err);
      });
    return result;
  }
  // 植物识别
  async identifyPlant(imgSrc) {
    const image = fs.readFileSync(imgSrc).toString('base64');
    // 如果有可选参数
    const options = {};
    options['baike_num'] = '3';

    // 带参数调用植物识别
    const result = await client
      .plantDetect(image, options)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        // 如果发生网络错误
        console.log(err);
      });
    return result;
  }
  // 文字识别接口

  // 身份证识别 type front：身份证含照片的一面 back：身份证带国徽的一面
  async identifyIdcard(imgSrc, type) {
    // 只能是本地地址
    const image = fs.readFileSync(imgSrc).toString('base64');
    let idCardSide = type;
    // 如果有可选参数
    let options = {};
    options['detect_direction'] = 'false'; // 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:- true：检测朝向；- false：不检测朝向。
    options['detect_risk'] = 'false'; // 是否开启身份证风险类型(身份证复印件、临时身份证、身份证翻拍、修改过的身份证)功能，默认不开启，即：false。可选值:true-开启；false-不开启

    // 带参数调用身份证识别
    let identifyResult = await clientText
      .idcard(image, idCardSide, options)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        // 如果发生网络错误
        console.log(err);
      });
    return identifyResult;
  }
  // 银行卡识别 银行卡类型，0:不能识别; 1: 借记卡; 2: 信用卡
  async identifyBankcard(imgSrc) {
    const image = fs.readFileSync(imgSrc).toString('base64');
    // 调用银行卡识别
    let identifyResult = await clientText
      .bankcard(image)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        // 如果发生网络错误
        console.log(err);
      });
    return identifyResult;
  }
  // 驾驶证识别
  async identifyDrivingLicense(imgSrc) {
    const image = fs.readFileSync(imgSrc).toString('base64');
    let identityResult = await clientText
      .drivingLicense(image)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        console.log(err);
      });
    return identityResult;
  }
  // 行驶证
  async identifyVehicleLicense(imgSrc) {
    const image = fs.readFileSync(imgSrc).toString('base64');
    let identityResult = await clientText
      .vehicleLicense(image)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        console.log(err);
      });
    return identityResult;
  }
  // 手写文字
  async identifyHandwriting(imgSrc) {
    const image = fs.readFileSync(imgSrc).toString('base64');
    let identityResult = await clientText
      .handwriting(image)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        console.log(err);
      });
    return identityResult;
  }
  // 车牌识别
  async identifyLicensePlate(imgSrc) {
    const image = fs.readFileSync(imgSrc).toString('base64');
    let identityResult = await clientText
      .licensePlate(image)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        console.log(err);
      });
    return identityResult;
  }
  // 营业执照识别
  async identifyBusinessLicense(imgSrc) {
    const image = fs.readFileSync(imgSrc).toString('base64');
    let identityResult = await clientText
      .businessLicense(image)
      .then(function(result) {
        return result;
      })
      .catch(function(err) {
        console.log(err);
      });
    return identityResult;
  }
}

module.exports = SearchAllService;
