'use strict';

const BAR = Symbol('Application#bar');
module.exports = {
  // 扩展方法
  foo(param) {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    console.log(param);
    return this.config.initDir;
  },
  // 扩展属性
  get bar() {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    if (!this[BAR]) {
      // 实际情况肯定更复杂
      this[BAR] = this.config.initDir + this.config.initDir;
    }
    return this[BAR];
  }
};
