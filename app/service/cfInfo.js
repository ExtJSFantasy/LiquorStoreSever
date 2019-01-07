'use strict';
const mssql = require('mssql');
const Service = require('egg').Service;

class CfInfoService extends Service {
  async index() {
    // const result = await this.app.mssql;
    // const data = await result.query('SELECT * FROM t_User');
    console.log(this.app.mssql.config);
    // const request = new mssql.Request((await this.app.mssql.get('db1')));
    // const rows = await request.query('SELECT * FROM t_User');
    // console.log(rows);
    // return data;
    const ingfo = new mssql.ConnectionPool(this.app.mssql.config)
      .connect()
      .then(pool => {
        return pool.query`select * from t_User`;
      })
      .then(result => {
        // console.log(result);
        const data = result.recordset;
        // console.log(data);
        return data;
      })
      .catch(err => {
        // ... error checks
        console.dir(err);
      });
    // 将这个promise返回
    return ingfo;
  }
}

module.exports = CfInfoService;
