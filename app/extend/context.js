'use strict';
module.exports = {
  // 扩展context方法,this就是ctx对象在其中可以调用ctx上的其他方法或访问属性
  getIp() {
    return this.request.host;
  }
};
