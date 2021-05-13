import Koa from 'koa';
import KoaJson from 'koa-json';
import Router from 'koa-router';
import Cors from 'koa-cors';
import Logger from 'koa-logger';
import Serve from 'koa-static';
import Color from 'color';
import path from 'path';
import fs from 'fs';

import { theme } from './api';

const port: number = 9000;
const app = new Koa();
const router = new Router();

app.use(Serve(`${__dirname}/../public`));

const render = (folderName) => {
  const source = path.join(__dirname, '..', folderName, `index.html`);
  return fs.readFileSync(source, 'utf-8');
};

router.get('/', async (ctx, next) => {
  ctx.body = render('public');
  await next();
});

router.get('/techblog', async (ctx, next) => {
  ctx.body = render('public/techblog');
  await next();
});
router.get(`/api/${theme.name}`, async (ctx, next) => {
  ctx.body = theme.data;
  await next();
});

// middle wares
app.use(KoaJson());
app.use(Cors());
app.use(Logger());

// routers
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(
    `\x1b[93m[Application is running on]\x1b[39m \x1b[96mhttp://localhost:${port}\x1b[39m`
  );
});
