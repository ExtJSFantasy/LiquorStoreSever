'use strict';

const Controller = require('egg').Controller;

class PostsController extends Controller {
  async echo() {
    console.log(111);
    this.ctx.body = '1111';
  }
  async index() {
    console.log(1111);
    this.ctx.body = '1111index';
  }
  async new() {
    console.log(2222);
    this.ctx.body = 'new';
  }

  async create() {
    console.log(33333);
    this.ctx.body = 'create';
  }

  async show() {
    console.log(44444);
    this.ctx.body = 'show';
  }

  async edit() {
    console.log(55555);
    this.ctx.body = 'edit';
  }

  async update() {
    console.log(66666);
    this.ctx.body = 'update';
  }
  async destroy() {
    console.log(777777);
    this.ctx.body = 'destroy';
  }
}

module.exports = PostsController;
