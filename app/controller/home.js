'use strict';

const Controller = require('egg').Controller;
const xlsx = require('node-xlsx');
class HomeController extends Controller {
  async index() {
    this.ctx.body = '你的世界';
    // 对Application的扩展
    console.log(this.app.foo());
    console.log(this.app.bar);
    // 对context扩展
    console.log(this.ctx.getIp());
    // helper扩展,类似于utils工具类
    console.log(this.ctx.helper.formattedDate(new Date(), 'YYYY-MM-DD HH:mm'));
    // await this.service.searchAll
    //   .identifyCarType()
    //   .then(result => {
    //     this.ctx.body = result;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // this.app.runSchedule('/schedule/updateCache');
    // await this.app.runSchedule('updateCache');
  }
  async xlsxParse() {
    const { ctx } = this;
    // const res = await app.xlsx.analysis('app/public/uploads/201810/xds123.xlsx');
    console.log(this.ctx.request);
    const sheets = xlsx.parse('app/public/uploads/201810/xds123.xlsx'); // 获取到所有sheets
    const result = await ctx.service.xlsxParse.xlsxParse(sheets);
    ctx.body = result;
  }
  async excel(ctx) {
    let req = ctx.helper.data(['strBeginTime', 'strEndTime', 'deptId']);
    req.deptId = req.deptId || ctx.session.user.deptId;

    let headers = [
      [{ t: '单位名称', f: 'deptName', w: 20, m1: 'A1', m2: 'A3', totalRowText: '合计' }, { t: '办理身份证证件', m1: 'B1', m2: 'M1' }, { t: '临时身份证证件', m1: 'N1', m2: 'O1' }, { t: '总计', m1: 'P1', m2: 'R2' }],
      [{ t: '申领', m1: 'B2', m2: 'D2' }, { t: '换领', m1: 'E2', m2: 'G2' }, { t: '补领', m1: 'H2', m2: 'J2' }, { t: '小计', m1: 'K2', m2: 'M2' }, { t: '临时身份证', m1: 'N2', m2: 'O2' }],
      [
        { t: '本地人数', f: 'slbdCount', totalRow: true },
        { t: '异地人数', f: 'slydCount', totalRow: true },
        { t: '金额', f: 'slJe', totalRow: true },
        { t: '本地人数', f: 'hlbdCount', totalRow: true },
        { t: '异地人数', f: 'hlydCount', totalRow: true },
        { t: '金额', f: 'hlJe', totalRow: true },
        { t: '本地人数', f: 'blbdCount', totalRow: true },
        { t: '异地人数', f: 'blydCount', totalRow: true },
        { t: '金额', f: 'blJe', totalRow: true },
        { t: '本地人数', f: 'xj_bdrs', totalRow: true },
        { t: '异地人数', f: 'xj_ydrs', totalRow: true },
        { t: '金额', f: 'xj_je', totalRow: true },
        { t: '人数', f: 'lsCount', totalRow: true },
        { t: '金额', f: 'lsJe', totalRow: true },
        { t: '本地人数', f: 'hj_bdrs', totalRow: true },
        { t: '异地人数', f: 'hj_ydrs', totalRow: true },
        { t: '金额', f: 'hj_je', totalRow: true }
      ]
    ];
    await ctx.helper.excelNew('/bill/querySfzbb', req, headers, '身份证受理统计', function(res) {
      for (let i = 0, len = res.data.length; i < len; i++) {
        let r = res.data[i];
        r.xj_bdrs = r.slbdCount + r.hlbdCount + r.blbdCount;
        r.xj_ydrs = r.slydCount + r.hlydCount + r.blydCount;
        r.xj_je = r.slJe + r.hlJe + r.blJe;
        r.hj_bdrs = r.slbdCount + r.hlbdCount + r.blbdCount + r.lsCount;
        r.hj_ydrs = r.slydCount + r.hlydCount + r.blydCount;
        r.hj_je = r.slJe + r.hlJe + r.blJe + r.lsJe;
      }
      return res;
    });
  }
}

module.exports = HomeController;
