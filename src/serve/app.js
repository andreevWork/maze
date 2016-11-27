var static = require('koa-static');
var Koa = require('koa');
var config = require('../config');
var app = new Koa();

app.use(static(config.paths.public));

// app.use(async ctx => {
//     const user = await User.getById(ctx.session.userid); // await instead of yield
//     ctx.body = user; // ctx instead of this
// });

app.listen(config.port);