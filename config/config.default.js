'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = (exports = {});
  exports.cluster = {
    listen: {
      port: 7002,
      //hostname: '127.0.0.1'
      // path: '/var/run/egg.sock',
    }
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539514644164_720';

  // add your config here
  config.middleware = [];
  // 只需要访问一个 MySQL 数据库实例
  /* config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '9087',
      // 用户名
      user: 'xds',
      // 密码
      password: 'xds120',
      // 数据库名
      database: 'eqms'
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  }; */
  /* config.mssql = {
    // Single Database
    client: {
      server: 'localhost\\XDS',
      // port: '1433',
      user: 'sa',
      password: 'xds120',
      database: 'APTIV',
      options: {
        encrypt: false // Use this if you're on Windows Azure
      }
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
    // Multi Databases
    // clients: {
    //   db1: {
    //     server: 'localhost\\XDS',
    //     // port: 'port',
    //     user: 'sa',
    //     password: 'xds120',
    //     database: 'APTIV',
    //     options: {
    //       encrypt: false, // Use this if you're on Windows Azure
    //     },
    //   },
    //   db2: {
    //     server: 'localhost\\XDS',
    //     user: 'sa',
    //     password: 'xds120',
    //     database: 'APTIV',
    //     options: {
    //       encrypt: false, // Use this if you're on Windows Azure
    //     },
    //   },
    // },
  }; */
  config.view = {
    root: [path.join(appInfo.baseDir, 'app/view'), path.join(appInfo.baseDir, 'path/to/another')].join(','),
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  };
  config.multipart = {
    // will append to whilelist
    // 一定要配置
    mode: 'file',
    // 扩展支持默认之外的文件
    fileExtensions: ['.foo', '.apk', '.txt', '.docx', '.xlsx']
  };
  exports.xlsx = {
    app: true,
    agent: false
  };
  exports.bodyParser = {
	  jsonLimit: '5mb',
	  formLimit: '6mb'
  };
  // 配置
  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: []
      },
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: []
      }
    }
  };
  // 暂时性关闭 post请求安全威胁csrf的防范
  config.security = {
    csrf: false
  };
  // const dir = [ path.join(appInfo.baseDir, 'app/public') ];

  // config.baseDir = {
  //   dir,
  // };
  config.initDir = 'app';
  config.wechat_config = {
    token: 'wechat_public_number_demo',
    appId: 'wx230f799414023398',
    appSecret: '27118b180d47a9b11c094a03cea63a74',
    getAccessTokenUrl: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET'
  };
  return config;
};
