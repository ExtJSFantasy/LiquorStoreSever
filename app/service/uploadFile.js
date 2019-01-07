'use strict';
const fs = require('mz/fs');
const path = require('path');
const mkdirs = require('jm-mkdirs');
const pump = require('mz-modules/pump');
const Service = require('egg').Service;

class UploadFileService extends Service {
  async upload() {
    const { ctx } = this;
    const files = ctx.request.files;
    const fields = [];
    // ctx.logger.warn('files: %j', files);
    const urlAddr = '/public/uploads/' + new Date().getFullYear() + (new Date().getMonth() + 1);
    const uploadsPath = this.config.initDir + urlAddr;

    if (!fs.existsSync(uploadsPath)) {
      mkdirs.sync(uploadsPath);
    }
    for (const file of files) {
      try {
        const filename = file.filename.toLowerCase();
        const targetPath = path.join(uploadsPath, filename); // path.join(this.config.baseDir, 'app/public', filename);
        fields.push({
          url: `${urlAddr}/${filename}`
        });
        const source = fs.createReadStream(file.filepath);
        const target = fs.createWriteStream(targetPath);
        await pump(source, target);
        // await fs.unlink(file.filepath);
      } catch (error) {
        throw error;
      } finally {
        // delete tmp file，删除临时文件
        await fs.unlink(file.filepath);
      }
    }
    return fields;
  }
}

module.exports = UploadFileService;
