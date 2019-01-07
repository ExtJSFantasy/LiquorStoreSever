'use strict';

// had enabled by egg
// exports.static = true;
// 启用MySQL插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
};
// 启用view 插件
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};
// 限制上传文件的大小
exports.multipart = {
  fileSize: '100mb'
};
// 开启socket.io
exports.io = {
  enable: true,
  package: 'egg-socket.io'
};
// sqlserver
exports.mssql = {
  enable: true,
  package: 'egg-mssql'
};
// 表格
exports.xlsx = {
  enable: true,
  package: 'egg-xlsx'
};
