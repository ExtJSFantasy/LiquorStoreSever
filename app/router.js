'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // app.beforeStart(async () => {
  // 保证应用启动监听端口前数据已经准备好了
  // 后续数据的更新由定时任务自动触发。也开在某个方法请求时开启定时器
  // await app.runSchedule('updateCache');
  // });
  // app.beforeStart(async () => {
  //   await app.runSchedule('access_token');
  // });
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.login.login);
  router.get('/test', controller.login.testHttp);
  router.get('/news', controller.login.list);
  router.post('/xdstest', controller.login.xdsInsert);
  router.post('/upload', controller.upload.index);
  router.post('/multipartUpload', controller.multipartUpload.upload);
  router.get('/sqlserverTest', controller.sqlserverTest.index);
  router.get('/excel', controller.home.excel);
  router.get('/download', controller.download.download);
  router.post('/xlsxParse', controller.home.xlsxParse);
  router.get('/wechat', controller.wechat.fromWechat);
  router.resources('posts', '/api/posts', controller.posts);
  // 识别
  router.post('/searchAll/v1/:name', controller.searchAll.identifyCarType);
  router.post('/searchAll/v2/:name', controller.searchAll.identifyIdcard);
  router.post('/searchAll/v3/:name', controller.searchAll.identifyBankcard);
  router.post('/searchAll/v5/:name', controller.searchAll.identifyDrivingLicense);
  router.post('/searchAll/v6/:name', controller.searchAll.identifyVehicleLicense);
  router.post('/searchAll/v7/:name', controller.searchAll.identifyLicensePlate);
  router.post('/searchAll/v8/:name', controller.searchAll.identifyBusinessLicense);
  router.post('/searchAll/v9/:name', controller.searchAll.identifyAnimal);
  router.post('/searchAll/v10/:name', controller.searchAll.identifyPlant);
  router.post('/searchAll/v11/:name', controller.searchAll.identifyAllType);
  router.post('/searchAll/v12/:name', controller.searchAll.identifyDish);
  router.post('/searchAll/v13/:name', controller.searchAll.identifyHandwriting);
};
