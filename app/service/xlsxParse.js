'use strict';

const Service = require('egg').Service;

class XlsxPrarseService extends Service {
  async xlsxParse(fileName) {
    let arr = [];
    // 第一个是属性列
    let columns = fileName[0].data[0];
    fileName.forEach(function(sheet) {
      for (const rowId in sheet['data']) {
        if (rowId === '0') {
          continue;
        } else if (sheet['data'][rowId].length !== 0) {
          arr.push(sheet['data'][rowId]);
        }
      }
    });
    let obj = {};
    let tepArr = [];

    for (let n = 0, lenIn = arr.length; n < lenIn; n++) {
      obj = {};
      for (let k = 0, len = columns.length; k < len; k++) {
        obj[columns[k]] = arr[n][k];
      }
      tepArr.push(obj);
    }
    return tepArr;
  }
}

module.exports = XlsxPrarseService;
